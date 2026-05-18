import { NextSeo } from "next-seo";
import styles from "@/styles/rentARoof.module.css";
import Hero from "@/components/Hero";
import RentHero from "@/components/rent-a-roof/RentHero";
import RentPathways from "@/components/rent-a-roof/RentPathways";
import RentBenefits from "@/components/rent-a-roof/RentBenefits";
import RentPolicyNews from "@/components/rent-a-roof/RentPolicyNews";
import RentBusinessModels from "@/components/rent-a-roof/RentBusinessModels";
import RentWaitlist from "@/components/rent-a-roof/RentWaitlist";

export default function RentARoofPage() {
  return (
    <>
      <NextSeo
        title="Rent A Roof — Virtual & Group Net Metering | AY Solar Energy"
        description="Rent A Roof by AY Solar Energy — solar access through Rajasthan VNM and GNM rules. Join the waitlist for early access in Jaipur and Tonk."
      />

      <div className={styles.root}>
        <Hero
          title="Rent A Roof"
          subtitle="Solar through Virtual & Group Net Metering"
          pageHero
          cta={false}
        />
        <RentHero />
        <RentPathways />
        <RentBenefits />
        <RentPolicyNews />
        <RentBusinessModels />
        <RentWaitlist />
      </div>
    </>
  );
}
