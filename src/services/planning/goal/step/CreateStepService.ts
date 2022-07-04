import prismaClient from "../../../../prisma";

interface StepRequest{
    number: number,
    value: string,
    goalId: string
}

class CreateStepService{
    async execute({ number, value, goalId}: StepRequest){

        const validGoal = prismaClient.goal.findFirst({
            where:{
                id: goalId
            }
        })

        if(!validGoal){
            throw new Error("Meta inválida");
            
        }

        const step = prismaClient.step.create({
            data:{
                number: number,
                value: value,
                goalId: goalId
            }
        })
        return step;
    }
}

export { CreateStepService}