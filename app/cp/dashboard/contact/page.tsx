"use client";
import { supabase } from "@/lib/supabase";
import { Facebook, Instagram, Linkedin, MessageSquare, Save } from "lucide-react";
import { useEffect, useState } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        id: '',
        phone: "",
        email: "",
        location: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        whatsapp: "",
    });

    const handleSave = async () => {
        const dataToSave = { ...settings };
        // Remove id if empty
        if (!dataToSave.id || dataToSave.id === '') {
            const { id, ...rest } = dataToSave;
            const { error } = await supabase
                .from("contactus")
                .upsert(rest, { onConflict: "id" });

            if (error) {
                console.log("Supabase error:", error);
                alert(`Error: ${error.message}`);
            } else {
                alert("Saved");
                fetchSettings();
            }
        } else {
            const { error } = await supabase
                .from("contactus")
                .upsert(dataToSave, { onConflict: "id" });

            if (error) {
                console.log("Supabase error:", error);
                alert(`Error: ${error.message}`);
            } else {
                alert("Saved");
                fetchSettings();
            }
        }
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        const { data } = await supabase.from("contactus").select("*").single();
        if (data) setSettings(data);
        setLoading(false);
    };



    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-6">Settings</h1>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input
                                value={settings.phone}
                                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                value={settings.email}
                                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <input
                                value={settings.location}
                                onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>



                        {/* Social Links */}
                        <div className="border-t pt-6">
                            <h2 className="text-lg font-semibold mb-4">Social Links</h2>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Linkedin className="text-blue-700" size={20} />
                                    <input
                                        value={settings.linkedin}
                                        onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                                        placeholder="LinkedIn URL"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <Instagram className="text-pink-600" size={20} />
                                    <input
                                        value={settings.instagram}
                                        onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                                        placeholder="Instagram URL"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <Facebook className="text-blue-600" size={20} />
                                    <input
                                        value={settings.facebook}
                                        onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                                        placeholder="Facebook URL"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <MessageSquare className="text-green-600" size={20} />
                                    <input
                                        value={settings.whatsapp}
                                        onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                                        placeholder="WhatsApp URL"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="mt-8 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2"
                    >
                        <Save size={18} /> Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}