
# Welcome to your PrivID project

## Project info

**URL**: https://lovable.dev/projects/5c455495-7ec2-4756-b956-88ff3b6dacce

## Features

### Core Features
- **Private Identity Verification**: Secure user identity with zero-knowledge proofs technology
- **Dark/Light Mode**: Toggle between dark and light themes
- **Status Updates**: Visual feedback during the verification process
- **AT Protocol Integration**: Shows verified checkmarks for PrivID users on Bluesky and other AT Protocol applications

### UI/UX Enhancements
- **Interactive Logo**: The PrivID logo's inner component reacts like an "eyeball", following cursor movement with enhanced rotation effects
- **Gradient Glow Cursor**: A subtle gradient glow follows the cursor using brand colors
- **Fuzzy Checkmark**: Animated checkmark indicator with brand colors

## Interactive UI Effects

The application includes two optional cursor-based effects:

1. **Gradient Glow Cursor**
   - A subtle gradient glow that follows the cursor
   - Uses the brand colors (pink, teal, yellow)
   - Automatically disabled on mobile devices

2. **Interactive Logo**
   - The inner part of the PrivID logo acts like an "eyeball" that follows your cursor
   - Features enhanced tilt sensitivity for a more noticeable effect
   - Creates a dynamic 3D-like effect with pronounced rotation

### Disabling Cursor Effects

If you need to disable these effects (for performance or other reasons):

1. Open `src/config/cursorEffects.ts`
2. Set `enableGlow` or `enableInteractiveLogo` to `false`
3. Alternatively, call `disableAllCursorEffects()` to disable all at once

```typescript
// To disable all cursor effects in your code:
import { disableAllCursorEffects } from '@/config/cursorEffects';

// Call this anywhere to disable all effects
disableAllCursorEffects();
```

## Project Structure

- `src/components/CursorGlow.tsx` - Gradient glow cursor effect
- `src/components/InteractiveLogo.tsx` - Interactive logo effect wrapper
- `src/hooks/useMousePosition.tsx` - Hook for tracking cursor position
- `src/config/cursorEffects.ts` - Configuration for cursor effects
- `src/components/FuzzyCheckmark.tsx` - Animated checkmark indicator
- `src/components/Logo.tsx` - PrivID logo component
- `src/components/StatusMessage.tsx` - Verification status messages
- `src/components/ThemeToggle.tsx` - Light/dark mode toggle
- `src/components/VerifyButton.tsx` - Verification button component
- `src/context/ThemeContext.tsx` - Theme management context
- `src/pages/Index.tsx` - Main application page

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5c455495-7ec2-4756-b956-88ff3b6dacce) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5c455495-7ec2-4756-b956-88ff3b6dacce) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains in Lovable.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
