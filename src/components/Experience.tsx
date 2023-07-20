import { TbBrandPaypalFilled } from "react-icons/tb";
import { ExperienceCard } from "./common";

function Experience() {
  return (
    <>
      <div className="col-span-12">
        <h2 className="mb-3 text-3xl font-semibold">Work experience</h2>
      </div>
      <ExperienceCard
        svgName={
          <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" />
        }
        caption={"Back office consultant with English B2"}
        date={"04.2021 - 09.2021"}
        description={
          "Customer indentification with the account by the documents provided by him"
        }
      />
    </>
  );
}

export default Experience;
