import prismaClient from "../../../../prisma";

interface ListRequest{
    goalId: string;
}

class ListStepService{
    async execute({goalId}: ListRequest){
        const step = await prismaClient.step.findMany({
            where:{
                goalId: goalId
            },
            select:{
                id: true,
                number: true,
                value: true
            }
        })

        return step;
    }
}

export { ListStepService}