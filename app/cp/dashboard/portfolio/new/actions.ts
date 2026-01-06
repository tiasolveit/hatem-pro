'use server';

import { createAdminClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProject(formData: FormData) {
    const supabase = await createAdminClient();

    // Upload thumbnail
    const thumbnailFile = formData.get('thumbnail') as File;
    let thumbnailUrl = '';

    if (thumbnailFile && thumbnailFile.size > 0) {
        const thumbnailExt = thumbnailFile.name.split('.').pop();
        const thumbnailPath = `thumbnails/${Date.now()}.${thumbnailExt}`;

        const { error: thumbnailError } = await supabase.storage
            .from('portfolio')
            .upload(thumbnailPath, thumbnailFile);

        if (thumbnailError) throw new Error(`Thumbnail upload failed: ${thumbnailError.message}`);

        const { data: { publicUrl } } = supabase.storage
            .from('portfolio')
            .getPublicUrl(thumbnailPath);

        thumbnailUrl = publicUrl;
    }

    // Upload video
    const videoFile = formData.get('video') as File;
    let videoUrl = '';

    if (videoFile && videoFile.size > 0) {
        const videoExt = videoFile.name.split('.').pop();
        const videoPath = `videos/${Date.now()}.${videoExt}`;

        const { error: videoError } = await supabase.storage
            .from('portfolio')
            .upload(videoPath, videoFile);

        if (videoError) throw new Error(`Video upload failed: ${videoError.message}`);

        const { data: { publicUrl } } = supabase.storage
            .from('portfolio')
            .getPublicUrl(videoPath);

        videoUrl = publicUrl;
    }

    const projectData = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        material: formData.get('material') as string,
        area: formData.get('area') as string,
        waste_reduced: formData.get('waste_reduced') as string,
        thumbnail_url: thumbnailUrl,
        video_url: videoUrl,
        images: [],
        model_url: null,
        cnc_files: [],
    };

    const { error } = await supabase
        .from('portfolio')
        .insert(projectData);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/cp/dashboard/portfolio');
    redirect('/cp/dashboard/portfolio');
}