import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "../_components/orgSwitcher";

interface PageProps {
  params: {
    orgId: string;
  };
}

export const Page = async ({ params }: PageProps) => {
  const { orgId } = params;
  const organization = await getOrganization(orgId);
  console.log(organization);
  return (
    <div className="container mx-auto">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-5xl font-bold gradient-title pb-4">{organization?.name}&rsquo;s Projects</h1>
        <OrgSwitcher />
      </div>
      <div className="mb-4">Show org projects</div>
      <div className="mt-8">Show user assigned and reported issues here</div>
    </div>
  );
};

export default Page;
