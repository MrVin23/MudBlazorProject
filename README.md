## Tailwind Installation
See installation instructions for tailwind css: 
link: https://tailwindcss.com/docs/installation/tailwind-cli

## Tailwind CSS Build Commands

This project uses Tailwind CSS v4 with the standalone executable (no Node.js required).

### Automatic Build (Recommended)
Tailwind CSS is automatically built when you run:
```bash
dotnet build
```

The build process is integrated into the `.csproj` file and will generate the CSS automatically.

### Manual Build Commands

**For Development (with watch mode):**
```bash
.\tailwindcss-windows-x64.exe -i .\wwwroot\css\input.css -o .\wwwroot\css\output.min.css --watch
```

**For Production (minified):**
```bash
.\tailwindcss-windows-x64.exe -i .\wwwroot\css\input.css -o .\wwwroot\css\output.min.css --minify
```

**One-time build:**
```bash
.\tailwindcss-windows-x64.exe -i .\wwwroot\css\input.css -o .\wwwroot\css\output.min.css
```

### Configuration
This project uses Tailwind CSS with a `tw-` prefix to avoid conflicts with other CSS frameworks like MudBlazor.

**Configuration in `input.css`:**
```css
@import "tailwindcss" prefix(tw);
```

All Tailwind classes are prefixed with `tw-`. For example:
- `text-center` becomes `tw-text-center`
- `bg-blue-500` becomes `tw-bg-blue-500`
- `hover:bg-indigo-700` becomes `hover:tw-bg-indigo-700`

### File Structure
- `wwwroot/css/input.css` - Your Tailwind input file with custom styles and prefix configuration
- `wwwroot/css/output.min.css` - Generated Tailwind CSS (auto-generated)
- `tailwindcss-windows-x64.exe` - Tailwind CLI executable (in project root)

