import { FaTh, FaRegChartBar, FaCommentAlt,FaUsers}  from "react-icons/fa";
import { RiFileChartLine } from "react-icons/ri";

import { MdOutlineGroupAdd} from "react-icons/md";


const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
 
  {
    title: "project",
    icon: <MdOutlineGroupAdd/>,
    childrens: [
        {
          title: "interior",
          path: "/interiorDB",
        },
        {
          title: "exterior",
          path: "/exteriorDB",
        },
        {
            title: "3d Visualization",
            path: "/visualizationDB",
        },
        {
            title: "mhq-project",
            path: "/mhqProjectDB",
        },
      ],
  },

  {
    title: "Students",
    icon: <FaUsers color="orangered"/>,
    path: "/Students",
  },
  {
    title: "Attendance",
    icon: <RiFileChartLine/>,
    path: "/attendance",
  },
 
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;