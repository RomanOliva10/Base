export const cbUsersMap = ((user, idx)=>{
   return (
   <li key= {idx}>
     <p>email: {user.email}</p>
     <p>name: {user.name}</p>
     <p>pass: {user.pass}</p>
     <span>==========================</span>
   </li>)
});