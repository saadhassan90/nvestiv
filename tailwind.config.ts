import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				// Modern, professional font stack for Nvestiv
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
				// Keep Harabara for special use cases
				'harabara': ['Harabara', 'sans-serif'],
			},
			colors: {
				// Nvestiv Brand Colors
				'nvestiv': {
					'violet': '#8215E0',
					'navy': '#0B0E1F',
					'light-bg': '#F9FAFB',
					'light-text': '#0F0F0F',
					'light-secondary': '#374151',
					'dark-text': '#FFFFFF',
					'dark-secondary': '#CBD5E1',
				},
				// Semantic color system
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				// Enhanced typography scale
				'2xs': ['0.625rem', '0.75rem'],
				'xs': ['0.75rem', '1rem'],
				'sm': ['0.875rem', '1.25rem'],
				'base': ['1rem', '1.5rem'],
				'lg': ['1.125rem', '1.75rem'],
				'xl': ['1.25rem', '1.875rem'],
				'2xl': ['1.5rem', '2rem'],
				'3xl': ['1.875rem', '2.25rem'],
				'4xl': ['2.25rem', '2.5rem'],
				'5xl': ['3rem', '3.5rem'],
				'6xl': ['3.75rem', '1'],
				'7xl': ['4.5rem', '1'],
				'8xl': ['6rem', '1'],
				'9xl': ['8rem', '1'],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			boxShadow: {
				'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
				'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
				// Nvestiv custom shadows
				'nvestiv': '0 8px 32px 0 rgb(130 21 224 / 0.15)',
				'nvestiv-lg': '0 20px 40px 0 rgb(130 21 224 / 0.2)',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				"slide-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"slide-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"parallax-float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"typing": {
					"0%": {
						width: "0%"
					},
					"40%": {
						width: "100%"
					},
					"80%": {
						width: "100%"
					},
					"100%": {
						width: "0%"
					}
				},
				"blink": {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "hsl(var(--foreground))"
					}
				},
				"sparkle": {
					"0%, 100%": {
						opacity: "0",
						transform: "scale(0)"
					},
					"50%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				"pulse-slow": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.8"
					}
				},
				"bounce-subtle": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-5px)"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"fade-in-up": "fade-in-up 0.5s ease-out",
				"fade-in-down": "fade-in-down 0.5s ease-out",
				"scale-in": "scale-in 0.2s ease-out",
				"slide-in-right": "slide-in-right 0.3s ease-out",
				"slide-in-left": "slide-in-left 0.3s ease-out",
				"parallax-float": "parallax-float 6s ease-in-out infinite",
				"typing": "typing 6s steps(30) infinite, blink .7s infinite",
				"sparkle": "sparkle 3s ease-in-out infinite",
				"pulse-slow": "pulse-slow 3s ease-in-out infinite",
				"bounce-subtle": "bounce-subtle 2s ease-in-out infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'nvestiv-gradient': 'linear-gradient(135deg, #8215E0, #0B0E1F)',
				'nvestiv-gradient-light': 'linear-gradient(135deg, #F9FAFB, #FFFFFF)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
