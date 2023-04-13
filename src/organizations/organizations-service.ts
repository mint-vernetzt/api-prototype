import { Organization } from "database";

type PublicOrganization = Pick<Organization, "id" | "name">;

export class OrganizationsService {
  public getAll(skip: number, take: number): PublicOrganization[] {
    // TODO: get all public organizations from prisma based on skip and take params
    const publicOrganizations = [
      {
        id: "some-id",

        name: "Jane Doe",
      },
      {
        id: "another-id",

        name: "John Doe",
      },
    ];
    return publicOrganizations;
  }
}
