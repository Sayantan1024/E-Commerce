import React from "react";
import { useProfile } from "../../context/ProfileContext";

export default function ProfileInfo() {
  const { userInfo, clearUserInfo } = useProfile();

  if (!userInfo) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h4 className="text-lg font-semibold">Profile</h4>
        <p className="text-gray-600 mt-2">No user information yet. Provide details when you try to get a product.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow flex justify-between items-start">
      <div>
        <h4 className="text-lg font-semibold">Profile</h4>
        <p className="text-gray-600 mt-2"><strong>Name:</strong> {userInfo.name}</p>
        <p className="text-gray-600"><strong>Phone:</strong> {userInfo.phone}</p>
        <p className="text-gray-600"><strong>Email:</strong> {userInfo.email}</p>
        <p className="text-gray-600"><strong>Address:</strong> {userInfo.address}</p>
      </div>

      <div className="flex flex-col gap-2">
        <button onClick={clearUserInfo} className="px-3 py-2 bg-red-500 text-white rounded">Clear Info</button>
      </div>
    </div>
  );
}
