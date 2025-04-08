// "use client";

// import { SignUp } from "@clerk/nextjs";
// import { useState } from "react";

// export default function SignUpPage() {
//   const [userType, setUserType] = useState("member"); // 默认角色

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>

//       {/* 用户类型选择 */}
//       <div className="mb-4">
//         <label className="mr-2 font-medium">User Type：</label>
//         <select
//           value={userType}
//           onChange={(e) => setUserType(e.target.value)}
//           className="border px-4 py-2 rounded"
//         >
//           <option value="member">Member</option>
//           <option value="host">Host</option>
//         </select>
//       </div>

//       {/* Clerk 的注册组件 */}
//       <SignUp
//         unsafeMetadata={{ UserType: userType }}
//         appearance={{
//           elements: {
//             card: "shadow-md rounded-lg p-6",
//           },
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState("member");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      {/* Tabs Card */}
      <div className="p-8 rounded-xl shadow-lg w-full max-w-md bg-white">
        <Tabs
          defaultValue="member"
          className="w-full"
          onValueChange={(val) => setActiveTab(val)}
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger
              value="member"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
            >
              Member
            </TabsTrigger>
            <TabsTrigger
              value="host"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
            >
              Host
            </TabsTrigger>
          </TabsList>

          <TabsContent value="member">
            <div
              key={activeTab === "member" ? "member" : "blank"}
              className="animate-fade-in transition duration-500 ease-in-out"
            >
              <SignUp
                unsafeMetadata={{ UserType: "member" }}
                appearance={{
                  elements: {
                    card: "shadow-md rounded-lg p-6",
                  },
                }}
              />
            </div>
          </TabsContent>

          <TabsContent value="host">
            <div
              key={activeTab === "host" ? "host" : "blank"}
              className="animate-fade-in transition duration-500 ease-in-out"
            >
              <SignUp
                unsafeMetadata={{ UserType: "host" }}
                appearance={{
                  elements: {
                    card: "shadow-md rounded-lg p-6",
                  },
                }}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
