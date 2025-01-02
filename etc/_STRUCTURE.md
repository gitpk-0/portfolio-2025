src/
├── core/                    # Core business logic and shared functionality
│   ├── types/              # TypeScript interfaces and type definitions
│   ├── constants/          # Application-wide constants
│   └── utils/              # Utility functions and helpers
│
├── features/               # Feature-based modules
│   ├── theme/             # Theme management
│   │   ├── stores/        # Theme-related Svelte stores
│   │   ├── components/    # Theme-specific components
│   │   └── types/        # Theme-related types
│   │
│   ├──  content/          # Content management
│   │   ├── blog/         # Blog-related components and logic
│   │   ├── projects/     # Project showcase components
│   │   └── services/     # Content fetching and processing
│   │
│   ├── shell/            # Unix-like shell interface
│       ├── commands/     # Shell command implementations
│       ├── components/   # Shell UI components
│       └── stores/       # Shell-related state management
│    
│
├── shared/                # Shared UI components and utilities
│   ├── components/       # Reusable UI components
│   │   ├── layout/      # Layout components
│   │   ├── navigation/  # Navigation components
│   │   └── ui/          # Basic UI components
│   │
│   ├── styles/          # Global styles and theme definitions
│   │   ├── themes/      # Theme-specific styles
│   │   └── base/        # Base styles and CSS reset
│   │
│   └── hooks/           # Shared Svelte actions and lifecycle hooks
│
├── routes/               # Page components and routing logic
│   ├── about/
│   ├── blog/
│   ├── projects/
│   └── contact/
│
└── app/                  # Application entry point and configuration
    ├── stores/          # Application-level stores
    ├── config/          # App configuration
    └── types/           # App-level type definitions

tests/                    # Test files matching src structure
├── unit/
├── integration/
└── e2e/

static/                   # Static assets
├── fonts/
├── images/
└── icons/