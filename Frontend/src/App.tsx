import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ResumeBuilder = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <Textarea name="summary" placeholder="Professional Summary" value={form.summary} onChange={handleChange} />
        <Textarea name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} />
        <Textarea name="education" placeholder="Education" value={form.education} onChange={handleChange} />
        <Button className="w-full">Download PDF (Coming Soon)</Button>
      </div>

      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-bold">{form.name}</h2>
          <p>{form.email} | {form.phone}</p>
          <h3 className="font-semibold mt-4">Summary</h3>
          <p>{form.summary}</p>
          <h3 className="font-semibold mt-4">Experience</h3>
          <p>{form.experience}</p>
          <h3 className="font-semibold mt-4">Education</h3>
          <p>{form.education}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeBuilder;
