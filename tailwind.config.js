module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
        'gl' : '38rem'
      },
      fontSize: {
         big:'2rem',
         h1:'1.5rem',
         h2:'1.25rem',
         h3:'1.125rem',
         normal:'.938rem',
         small:'.813rem',
         smaller:'.75rem'
      },
      colors: {
        "vt-first":"var(--first)",
        "vt-alt": "var(--alt)", 
        "vt-light": "var(--light)", 
        "vt-title":"var(--title)", 
        "vt-txt":"var(--txt)", 
        "vt-txtLight":"var(--txtLight)", 
        "vt-input": "var(--input)", 
        "vt-body": "var(--body)", 
        "vt-container": "var(--container)"
        
      },
      fontFamily: {
        lob: "'Lobster', cursive",
        dm: "'DM Mono', monospace",
        pop: "'Poppins', sans-serif"
      },
    },
  },
  plugins: [],
}
