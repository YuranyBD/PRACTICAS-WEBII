i//mport { envs } from './config/plugins/envs.plugin'
import prisma from './prismaInstance';


////////////////////////////////////////////////////////////////////////
//////////////////////Primera Forma////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const createUser= async ()=>{
    const userCreated= await prisma.userModel.create({
        data:{
          email: 'greilybravo@gmail.com',
          password: '122',
          name: 'Greily',
          lname: 'Bravo',
          phone: '0997674734',
          idCard: '1317004412',
          semestre: 7,
          alias: 'Yugrei',
          biography: '',
          status: true,
        }
    });
    console.log(userCreated)
    const   accessControlCreated= await prisma.accessControl.create({
        data:{
            userId:userCreated.id,

            email: "milton1@gmail.com",         
        }
    })

    const LinkCreated= await prisma.link.create({
        data:{
            userId:userCreated.id,
            accessControlId: AccessControlCreated.id,
            email: 'greilybravo@gmail.com',
            name:"Greily", 
            link: "jnnnknlnlknk",          
        }
    })

}

const queryUser= async ()=>{
    const user= await prisma.userModel.findMany({
        include:{
            accessControllers:true,
            links:true
        }
        , where:{
            id:2
        }
    })
    console.dir(user, {depth: null})
}

const updateUser= async ()=>{
    const user= await prisma.userModel.update({
        data:{
            name:"Yurany"
        },
        where:{
            id:1
        }
    })
}

const deleteUser= async ()=>{
    const user= await prisma.userModel.delete({
        where:{
            id:1
        }
    })
}

(async ()=>{
    // await createUser()
    //await deleteUser()
    await queryUser()
    .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
})()
