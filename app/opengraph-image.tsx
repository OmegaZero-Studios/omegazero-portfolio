import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Md Nazmul Haque Chowdhury - Lead Game Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 'bold',
              color: 'white',
              marginRight: '20px',
            }}
          >
            ΩZ
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            OmegaZero Studios
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 20px 0',
              lineHeight: 1.2,
            }}
          >
            Md Nazmul Haque Chowdhury
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#e2e8f0',
              margin: '0 0 40px 0',
              fontWeight: '500',
            }}
          >
            Lead Game Developer | Unity Expert | Multiplayer Systems Architect
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#1e293b',
                padding: '20px 30px',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#3b82f6',
                }}
              >
                6+
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#94a3b8',
                }}
              >
                Years Experience
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#1e293b',
                padding: '20px 30px',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#94a3b8',
                }}
              >
                Shipped Games
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#1e293b',
                padding: '20px 30px',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#ec4899',
                }}
              >
                1M+
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#94a3b8',
                }}
              >
                Downloads
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
