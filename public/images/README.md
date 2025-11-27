# Image Assets Required

Add the following images to deploy your portfolio:

## Profile Picture
Place your profile photo in:
```
public/images/profile/profile-pic.jpg
```
- Recommended size: 256x256px or larger (will be displayed at 128x128)
- Format: JPG, PNG, or WebP
- Should be a square image for best results

## Game Logos
Place your game logos/icons in:
```
public/images/games/
```

### Required Files:
| File Name | Game | Recommended Size |
|-----------|------|------------------|
| `crapsee.png` | Crapsee | 512x512px |
| `water-slipper.png` | Water Slipper | 512x512px |
| `fire-escape-3d.png` | Fire Escape 3D | 512x512px |
| `tube-man.png` | Tube Man | 512x512px |
| `crazy-chemist.png` | Crazy Chemist | 512x512px |
| `the-commando.png` | The Commando | 512x512px |

### Notes:
- All game images will be displayed with `object-cover` so they'll fill the container
- Featured project (Crapsee) is displayed at 192x192px
- Portfolio grid games are displayed at full width with 192px height
- PNG format recommended for logos with transparency
- JPG/WebP acceptable for screenshots

## After Adding Images
1. Run `npm run dev` to test locally
2. Commit changes to git
3. Push to GitHub
4. Deploy to Vercel
