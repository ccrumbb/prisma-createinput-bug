import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

main();

async function main() {
    await prisma.user.upsert({
        where: {
            Id: 1
        },
        update: {},
        create: {
            Id: 1,
            Name: "User1"
        }
    });


    /*
        Doesn't work, error raised:
        ```
        Unknown arg `Id` in create.Id for type RoleCreateInput. Available args:

        type RoleCreateInput {
          Name: String
          CreatedByUser: UserCreateNestedOneWithoutRoleInput
        }
        ```
     */
    prisma.role.upsert({
        where: {
            Id: 1
        },
        update: {},
        create: <Prisma.RoleCreateInput>{
            Id: 1,
            Name: 'Test',
            CreatedByUser: {
                connect: {
                    Id: 1
                }
            },
        }
    }).catch(console.error);

    // It works like a charm!
    // prisma.role.upsert({
    //     where: {
    //         Id: 1
    //     },
    //     update: {},
    //     create: <Prisma.RoleUncheckedCreateInput>{
    //         Id: 1,
    //         Name: 'Test',
    //         CreatedByUserId: 1
    //     }
    // }).catch(console.error);
}
