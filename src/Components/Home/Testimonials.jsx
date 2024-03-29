// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const Testimonials = () => {
//   const [showData, setShowData] = useState(null);
//   const details = useLoaderData();
//   console.log(details);
//   const { _id } = useParams();
//   console.log(_id);
//   useEffect(() => {
//     if (details && Array.isArray(details) && _id) {
//       const summary = details.find((detail) => detail?._id === _id);
//       if (summary) {
//         setShowData(summary);
//       }
//     }
//   }, [_id, details]);
//     const summary = details.find((detail) => detail?._id === _id);
//   return (
//     <div>
//       {showData?.user?.projects.map((projectDetail) =>
//         console.log(projectDetail)
//         <p className="text-white">{projectDetail?.title}</p>
//       )}
//       {showData.user?.projects._id === _id
//         ? showData?.user?.projects?.map((data) => {
//             console.log(data);
//             return (
//               <div key={data._id}>
//                 <p className="text-white">{data?.title}</p>
//                 <p className="text-white">{data?._id}</p>
//               </div>
//             );
//           })
//         : " "}
//     </div>
//   );
// };

// export default Testimonials;
