import prismaClient from "../../../prisma";

interface UpdateRequest{
    habitId:string,
    frequency: []
}

class UpdateFrequencyService{
    async execute({habitId, frequency}: UpdateRequest){
            const habit = await prismaClient.habit.update({
                where:{
                    id: habitId
                },
                data:{
                    frequency: frequency 
                }
            });

            return habit;
        }
}

export { UpdateFrequencyService}