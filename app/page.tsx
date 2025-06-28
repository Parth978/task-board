import CompanyCarousel from "@/components/companyCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "Project Management",
      description:
        "Create and manage multiple projects with boards, tasks, and team assignments.",
      icon: Layout,
    },
    {
      name: "Kanban Board",
      description:
        "Drag-and-drop tasks across columns like To Do, In Progress, and Done.",
      icon: Calendar,
    },
    {
      name: "Issue Tracking",
      description:
        "Log, update, and resolve bugs or feature requests with detailed issue cards.",
      icon: BarChart,
    },
  ];
  return (
    <>
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-10 flex flex-col">
          Streamline Your Workspace <br />
          <span className="flex justify-center gap-2">
            with <h1 className="text-blue-900 font-sans">Workzy...</h1>
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10">
          A simple, open-source tool to help you manage your workspace
          efficiently.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={16} />
          </Button>
        </Link>
        <Link href="#features">
          <Button variant="outline" size="lg" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>
      <section id="features" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-12 text-center">Key Features</h3>
          <div className="flex justify-center gap-4">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center gap-2 pt-4">
                      <feature.icon size={24} className="text-blue-600" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-xl font-bold mb-12 text-center">Trusted By Industry Leaders</h3>
          <div className="flex justify-center gap-4">
           <CompanyCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
