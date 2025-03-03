import type { Metadata } from "next";
import {
  ClerkProvider

} from '@clerk/nextjs'
import "../globals.css";
import Header from "@/components/ui/Header";
import { SanityLive } from "@/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/ui/DisableDraftMode";


export const metadata: Metadata = {
  title: "Shopr. The Only Way to Shop!",
  description: "Shopr. Online store that rocks!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>    
    <html lang="en">
      <body>
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode/>
          <VisualEditing/>
        </>
      )}

        <main>
          <Header />

          
          {children}
        </main>
        
        <SanityLive/>
      </body>
    </html>
    </ClerkProvider>
  );
}
