import Header from "../components/Header";
import { useState } from "react";

function Settings() {
  const [fullName, setFullName] = useState("Ahmad Jawabra");
  const [email, setEmail] = useState("ahmad@example.com");
  const [role, setRole] = useState("Admin");
  const [theme, setTheme] = useState("Dark");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);

  return (
    <div className="p-6 md:p-8">
      

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
            <p className="text-slate-400 text-sm mt-1">
              Update your account information and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500"
              >
                <option>Dark</option>
                <option>Light</option>
                <option>System</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
            <p className="text-slate-400 text-sm mt-1">
              Manage how you receive updates
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-medium">Email Notifications</h3>
                <p className="text-slate-400 text-sm">
                  Receive system updates by email
                </p>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`w-14 h-8 rounded-full transition relative ${
                  emailNotifications ? "bg-blue-600" : "bg-slate-700"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition ${
                    emailNotifications ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-medium">Push Notifications</h3>
                <p className="text-slate-400 text-sm">
                  Receive browser push notifications
                </p>
              </div>
              <button
                onClick={() => setPushNotifications(!pushNotifications)}
                className={`w-14 h-8 rounded-full transition relative ${
                  pushNotifications ? "bg-blue-600" : "bg-slate-700"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition ${
                    pushNotifications ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-medium">Marketing Emails</h3>
                <p className="text-slate-400 text-sm">
                  Receive product news and offers
                </p>
              </div>
              <button
                onClick={() => setMarketingEmails(!marketingEmails)}
                className={`w-14 h-8 rounded-full transition relative ${
                  marketingEmails ? "bg-blue-600" : "bg-slate-700"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition ${
                    marketingEmails ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;