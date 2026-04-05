import { connectDB } from '@/lib/mongodb'
import { Profile } from '@/lib/models/Profile'
import { Skill } from '@/lib/models/Skill'
import { Education } from '@/lib/models/Education'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { IProfile, ISkill, IEducation } from '@/types'

async function getData() {
  await connectDB()
  const [profileDoc, skillDocs, eduDocs] = await Promise.all([
    Profile.findOne({}).lean(),
    Skill.find({}).sort({ sortOrder: 1 }).lean(),
    Education.find({}).sort({ sortOrder: 1 }).lean(),
  ])
  return {
    profile: profileDoc ? (JSON.parse(JSON.stringify(profileDoc)) as IProfile) : null,
    skills: JSON.parse(JSON.stringify(skillDocs)) as ISkill[],
    education: JSON.parse(JSON.stringify(eduDocs)) as IEducation[],
  }
}

export const metadata = {
  title: 'About',
  description: 'Meet Abhishek — senior software engineer and tech content creator behind DevilOfTech.',
}

export default async function AboutPage() {
  const { profile, skills, education } = await getData()

  const name = profile?.name ?? 'Abhishek'
  const bio = profile?.bio ?? 'Senior Software Engineer and tech content creator — building systems by day, teaching the craft by night.'
  const photo = profile?.photo ?? null
  const socialLinks = profile?.socialLinks

  return (
    <>
      {/* ═══ HERO: bio left, image right ═══ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100 }}>
        <div className="container">
          <div className="about-hero-grid">

            {/* LEFT — bio */}
            <RevealWrapper>
              <div className="section-eyebrow">About</div>
              <h1 style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900,
                color: 'transparent',
                background: 'linear-gradient(160deg, #fff8e1 0%, #f5c842 30%, #c9871c 65%, #7a4500 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px rgba(212,140,0,0.35))',
                lineHeight: 1.05,
                marginBottom: 8,
              }}>
                {name}
              </h1>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 16, color: 'var(--gold)', letterSpacing: '0.12em', marginBottom: 32 }}>
                {profile?.roles?.length ? profile.roles.join(' · ') : 'Tech Content Creator · Software Engineer'}
              </div>

              <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: 36, maxWidth: 560 }}>
                {bio}
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {socialLinks?.youtube && (
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 10 }}>
                    ▶ YouTube
                  </a>
                )}
                {socialLinks?.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 10 }}>
                    ◈ Instagram
                  </a>
                )}
                {socialLinks?.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 10 }}>
                    ⌥ GitHub
                  </a>
                )}
              </div>
            </RevealWrapper>

            {/* RIGHT — photo */}
            <RevealWrapper className="photo-col">
              <div style={{ position: 'relative' }}>
                {/* Glow ring */}
                <div style={{
                  position: 'absolute', inset: -3,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--blood), var(--ember), var(--gold))',
                  zIndex: 0,
                }} />

                <div style={{
                  position: 'relative', zIndex: 1,
                  borderRadius: 10,
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  background: 'rgba(44,36,32,0.8)',
                }}>
                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo}
                      alt={name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  ) : (
                    /* Placeholder — set your photo URL from the Admin panel (Profile → photo field) */
                    <div style={{
                      width: '100%', height: '100%',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      background: 'linear-gradient(160deg, rgba(139,0,0,0.3) 0%, rgba(16,12,8,0.9) 100%)',
                      gap: 16,
                    }}>
                      <div style={{
                        width: 100, height: 100, borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--ember), var(--blood))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--display)', fontSize: 36, color: 'var(--parchment)',
                        boxShadow: '0 0 40px rgba(212,56,13,0.4)',
                      }}>
                        DT
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(245,237,216,0.3)', textAlign: 'center' }}>
                        ADD PHOTO IN ADMIN<br />Profile → photo field
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative label */}
                <div style={{
                  position: 'absolute', bottom: -16, right: -16, zIndex: 2,
                  background: 'rgba(16,12,8,0.9)', border: '1px solid rgba(212,56,13,0.4)',
                  borderRadius: 4, padding: '8px 16px',
                }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)' }}>@DEVILOFTECH</div>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ DETAIL CARDS ═══ */}
      {profile?.detailCards && profile.detailCards.length > 0 && (
        <section style={{ background: 'rgba(26,20,16,0.6)', padding: '80px 0' }}>
          <div className="container">
            <div className="section-eyebrow">Details</div>
            <div className="section-title">At a Glance</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {profile.detailCards.map((card, i) => (
                <RevealWrapper key={i}>
                  <div className="detail-card">
                    <div className="detail-icon">{card.icon}</div>
                    <div>
                      <div className="detail-label">{card.label}</div>
                      <div className="detail-value">{card.value}</div>
                      {card.sub && <div className="detail-sub">{card.sub}</div>}
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="divider" />

      {/* ═══ SKILLS ═══ */}
      {skills.length > 0 && (
        <section>
          <div className="container">
            <div className="section-eyebrow">Skills</div>
            <div className="section-title">The Arsenal</div>
            <div className="skills-grid">
              {skills.map((cluster) => (
                <RevealWrapper key={String(cluster._id)}>
                  <div className="skill-cluster">
                    <div className="cluster-title">{cluster.clusterTitle}</div>
                    <div className="skill-tags">
                      {cluster.tags.map((tag, i) => (
                        <span key={i} className={`skill-tag${tag.isHot ? ' hot' : ''}`}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="divider" />

      {/* ═══ EDUCATION ═══ */}
      {education.length > 0 && (
        <section style={{ background: 'rgba(26,20,16,0.6)' }}>
          <div className="container">
            <div className="section-eyebrow">Education</div>
            <div className="section-title">The Foundation</div>
            <div className="edu-grid">
              {education.map((edu) => (
                <RevealWrapper key={String(edu._id)}>
                  <div className="edu-card">
                    <div className="edu-badge">{edu.badge}</div>
                    <div>
                      <div className="edu-degree">{edu.degree}</div>
                      <div className="edu-inst">{edu.institution}</div>
                      <div className="edu-year">{edu.year}</div>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
