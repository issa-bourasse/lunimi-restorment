import HeroSection from '@/components/sections/HeroSection'
import SignatureDishes from '@/components/sections/SignatureDishes'
import RestaurantAtmosphere from '@/components/sections/RestaurantAtmosphere'
import ChefTeam from '@/components/sections/ChefTeam'
import ReservationExperience from '@/components/sections/ReservationExperience'
import LocationContact from '@/components/sections/LocationContact'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import LoyaltySystem from '@/components/loyalty/LoyaltySystem'

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Signature Dishes Showcase */}
      <SignatureDishes />
      
      {/* Restaurant Atmosphere */}
      <RestaurantAtmosphere />
      
      {/* Chef & Culinary Team */}
      <ChefTeam />
      
      {/* Reservation Experience */}
      <ReservationExperience />
      
      {/* Location & Contact */}
      <LocationContact />
      
      {/* Footer */}
      <Footer />
      
      {/* Loyalty System - Floating Component */}
      <LoyaltySystem />
    </main>
  )
}
