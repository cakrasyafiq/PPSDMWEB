# SIMLATIH — Sistem Informasi Manajemen Pelatihan

SIMLATIH is a modern, responsive frontend dashboard application for managing training, participants, certification cycles, and budget tracking for PPSDM Migas (PT Pertamina Hulu Rokan). It has been successfully migrated from a monolithic HTML/CSS design into a modular React + Vite architecture.

## 🚀 Technologies Used
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: `react-router-dom` for seamless client-side page transitions.
- **Charts**: `recharts` for interactive, data-driven visualizations.
- **Styling**: Vanilla CSS with robust CSS variables (`var(--navy)`, `var(--amber)`, etc.) preserving a highly premium UI/UX.

## ✨ Key Features
- **Authentication**: Includes a mock login system protected by route guards.
- **Dynamic Animations**: Smooth CSS keyframe animations (`slideUpFade`, `popIn`) for login and page transitions.
- **Component Architecture**: Extracted UI primitives (`Button`, `Card`, `Badge`, `KpiCard`) for high reusability.
- **Mock Data Segregation**: All static data is logically separated into the `src/data/` directory, allowing for easy integration with a real backend API in the future.

## 🛠️ Installation & Setup

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   Start the Vite dev server:
   ```bash
   npm run dev
   ```

3. **Access the Application**
   Open your browser and navigate to the provided localhost link (typically `http://localhost:5173`).

4. **Login Credentials**
   Use the following mock credentials to access the dashboard:
   - **Username**: `admin`
   - **Password**: `123456`

## 📂 Project Structure

```text
src/
├── components/
│   ├── features/  # Complex, specific components (e.g., Charts, Timelines)
│   ├── layout/    # Global layout components (Sidebar, Topbar, AppLayout)
│   ├── modals/    # Dialog components for data entry
│   └── ui/        # Reusable primitive UI elements (Cards, Buttons, Badges)
├── data/          # Centralized dummy data files (anggaranData.js, dll)
├── pages/         # Page-level components (Dashboard, Login, Peserta, etc.)
├── App.jsx        # Main routing and authentication state
└── index.css      # Global styles, variables, and animations
```
