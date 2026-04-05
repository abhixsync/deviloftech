'use client'

export default function HeroFlames() {
  return (
    <div className="hero-flames">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="hf" />
      ))}
    </div>
  )
}
