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
				'sans': ['Roboto', 'sans-serif'],
				'harabara': ['Harabara', 'sans-serif'],
			},
			colors: {
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
				// Nvestiv Brand Colors
				brand: {
					blue: 'hsl(var(--brand-blue))',
					navy: 'hsl(var(--brand-navy))',
					'light-bg': 'hsl(var(--brand-light-bg))',
				},
				// Semantic text colors
				text: {
					display: 'hsl(var(--text-display))',
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))',
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
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
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
				"parallax-float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"typing": {
					"0%": {
						width: "0%",
						opacity: "0"
					},
					"50%": {
						width: "100%",
						opacity: "1"
					},
					"100%": {
						width: "100%",
						opacity: "1"
					}
				},
				"file-load": {
					"0%": { 
						transform: "scale(0.8) rotate(-5deg)",
						opacity: "0"
					},
					"50%": {
						transform: "scale(1.05) rotate(2deg)",
						opacity: "0.8"
					},
					"100%": { 
						transform: "scale(1) rotate(0deg)",
						opacity: "1"
					}
				},
				"cascade-in": {
					"0%": { 
						transform: "translateY(30px) scale(0.9)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateY(0) scale(1)",
						opacity: "1"
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
				"marquee": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" }
				},
				"marquee-cycle-up": {
					"0%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0%)" }
				},
				"marquee-cycle-down": {
					"0%": { transform: "translateY(-100%)" },
					"50%": { transform: "translateY(0%)" },
					"100%": { transform: "translateY(-100%)" }
				},
				"cascade": {
					"0%": { 
						transform: "translateY(-200px) scale(0.8)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateY(0) scale(1)",
						opacity: "1"
					}
				},
				"cascade-1": {
					"0%": { 
						transform: "translateZ(-400px) scale(0.7)",
						opacity: "0.3"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-2": {
					"0%": { 
						transform: "translateZ(-350px) scale(0.8)",
						opacity: "0.4"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-3": {
					"0%": { 
						transform: "translateZ(-450px) scale(0.6)",
						opacity: "0.2"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-4": {
					"0%": { 
						transform: "translateZ(-300px) scale(0.9)",
						opacity: "0.5"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-towards-1": {
					"0%": { 
						transform: "translateZ(-400px) scale(0.7)",
						opacity: "0.3"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-towards-2": {
					"0%": { 
						transform: "translateZ(-350px) scale(0.8)",
						opacity: "0.4"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"cascade-towards-3": {
					"0%": { 
						transform: "translateZ(-450px) scale(0.6)",
						opacity: "0.2"
					},
					"100%": { 
						transform: "translateZ(0px) scale(1)",
						opacity: "1"
					}
				},
				"settle-up": {
					"0%": { 
						transform: "translateY(0)"
					},
					"100%": { 
						transform: "translateY(50px)"
					}
				},
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "typing-dots": {
          "0%, 20%": { opacity: "0.4" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.4" }
        },
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"parallax-float": "parallax-float 6s ease-in-out infinite",
				"typing": "typing 2s ease-in-out forwards",
				"file-load": "file-load 0.8s ease-out forwards",
				"cascade-in": "cascade-in 0.6s ease-out forwards",
				"sparkle": "sparkle 3s ease-in-out infinite",
				"marquee": "marquee 30s linear infinite",
				"marquee-cycle-up": "marquee-cycle-up 40s ease-in-out infinite",
				"marquee-cycle-down": "marquee-cycle-down 40s ease-in-out infinite",
				"cascade": "cascade 1.5s ease-out forwards",
				"cascade-1": "cascade-1 1.2s ease-out forwards",
				"cascade-2": "cascade-2 1.4s ease-out forwards 0.2s",
				"cascade-3": "cascade-3 1.6s ease-out forwards 0.4s",
				"cascade-4": "cascade-4 1.8s ease-out forwards 0.6s",
				"cascade-towards-1": "cascade-towards-1 1.5s ease-out forwards",
				"cascade-towards-2": "cascade-towards-2 1.7s ease-out forwards 0.3s",
				"cascade-towards-3": "cascade-towards-3 1.9s ease-out forwards 0.6s",
				"cascade-towards-4": "cascade-towards-4 2.1s ease-out forwards 0.9s",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "typing-dots": "typing-dots 1.5s ease-in-out infinite",
				"settle-up": "settle-up 1s ease-out forwards",
				"settle-down": "settle-down 1s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;