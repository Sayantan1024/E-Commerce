import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext";

export default function WishlistModal({ close, onSave }) {
  const { setUserInfo } = useProfile();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!name.trim() || !phone.trim() || !email.trim() || !address.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const info = { name: name.trim(), phone: phone.trim(), email: email.trim(), address: address.trim() };
    // save via context (which syncs to localStorage)
    setUserInfo(info);

    // if parent passed onSave (Home), propagate as well
    if (onSave) onSave(info);

    // close modal (parent may also remove it)
    if (close) close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Enter Your Info</h3>
          <button onClick={close} className="text-gray-500">X</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1">Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-3 px-3 py-2 border rounded" />

          <label className="block text-sm mb-1">Phone</label>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mb-3 px-3 py-2 border rounded" />

          <label className="block text-sm mb-1">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-3 px-3 py-2 border rounded" />

          <label className="block text-sm mb-1">Address</label>
          <input required value={address} onChange={(e) => setAddress(e.target.value)} className="w-full mb-3 px-3 py-2 border rounded" />

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={close} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
