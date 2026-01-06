import PortfolioGrid from '@/components/PortfolioGrid';
import { createClient } from '@/utils/supabase/server';

export default async function PortfolioGridWrapper({
    t,
    selectedCategory = 'All',
    selectedMaterial = null,
    lang
}: {
    t: any;
    selectedCategory?: string;
    selectedMaterial?: string | null;
    lang: string;
}) {
    const supabase = await createClient();

    const { data: projects } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false });

    const dbProjects = projects?.map((project: any) => ({
        id: project.id,
        title: project.title,
        category: project.category,
        material: project.material,
        area: project.area,
        wasteReduced: project.waste_reduced,
        thumbnail_url: project.thumbnail_url,
        video_url: project.video_url,
    })) || [];

    return (
        <PortfolioGrid
            t={t}
            projects={dbProjects}
            selectedCategory={selectedCategory}
            selectedMaterial={selectedMaterial}
            lang={lang}
        />
    );
}