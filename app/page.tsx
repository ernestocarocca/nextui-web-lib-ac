import { Timeline } from "@/components/ui/timeline";
import { ShootingStarsAndStarsBackgroundDemo } from "./componentsglobal/shootingtar";
import { TimelineDemo } from "./componentsglobal/timeline";

export default function Home() {
  return (
    <div className=" overflow-auto">
      <section>
        <ShootingStarsAndStarsBackgroundDemo />
      </section>
      <section className="h-[800ox]">
        <h1 className="text-4xl">Welcome to the home page</h1>
      </section>
    </div>
  );
}
