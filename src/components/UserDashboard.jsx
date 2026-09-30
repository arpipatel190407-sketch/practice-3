import React, { useState } from 'react';

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [notifications, setNotifications] = useState(3);
  const [darkMode, setDarkMode] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);

    if (isLoggedIn) {
      setIsAdmin(false);
      setActiveTab('Dashboard');
    }
  }

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
    setActiveTab('Dashboard');
  }

  function clearNotifications() {
    setNotifications(0);
  }

  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      icon: '📁',
      color: '#4f46e5',
    },
    {
      title: 'Tasks Completed',
      value: '186',
      icon: '✅',
      color: '#16a34a',
    },
    {
      title: 'Pending Tasks',
      value: '12',
      icon: '⏳',
      color: '#ea580c',
    },
    {
      title: 'Team Members',
      value: '18',
      icon: '👥',
      color: '#7c3aed',
    },
  ];

  const activities = [
    {
      title: 'Project Alpha updated',
      time: '10 minutes ago',
      icon: '📁',
    },
    {
      title: 'New task assigned',
      time: '35 minutes ago',
      icon: '📋',
    },
    {
      title: 'Security check completed',
      time: '1 hour ago',
      icon: '🔐',
    },
    {
      title: 'Team meeting scheduled',
      time: '2 hours ago',
      icon: '📅',
    },
  ];

  return (
    <div
      className={
        darkMode
          ? 'dashboard dark-dashboard'
          : 'dashboard'
      }
    >

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
          background: #f5f7fb;
        }

        button {
          font-family: inherit;
        }

        .dashboard {
          min-height: 100vh;
          display: flex;

          color: #1f2937;

          background:
            linear-gradient(
              135deg,
              #f8fafc,
              #eef2ff
            );

          transition: 0.3s ease;
        }

        .dark-dashboard {
          color: #f8fafc;

          background:
            linear-gradient(
              135deg,
              #0f172a,
              #111827
            );
        }

        /* =========================
           SIDEBAR
        ========================= */

        .sidebar {
          width: 245px;
          min-height: 100vh;

          padding: 25px 15px;

          background: #ffffff;

          border-right:
            1px solid #e5e7eb;

          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;

          z-index: 10;
        }

        .dark-dashboard .sidebar {
          background: #111827;
          border-color: #1f2937;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 5px 10px 25px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: white;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          box-shadow:
            0 8px 20px
            rgba(79,70,229,0.25);
        }

        .logo-text {
          font-size: 16px;
          font-weight: 900;
        }

        .logo-subtitle {
          margin-top: 2px;

          color: #94a3b8;

          font-size: 9px;
        }

        .nav-title {
          padding: 10px;

          color: #94a3b8;

          font-size: 10px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-button {
          width: 100%;

          display: flex;
          align-items: center;
          gap: 11px;

          margin-bottom: 5px;
          padding: 11px 12px;

          border: none;
          border-radius: 10px;

          color: #64748b;
          background: transparent;

          cursor: pointer;

          font-size: 12px;
          font-weight: 700;

          text-align: left;

          transition: 0.2s ease;
        }

        .dark-dashboard .nav-button {
          color: #94a3b8;
        }

        .nav-button:hover {
          color: #4f46e5;
          background: #eef2ff;
        }

        .dark-dashboard .nav-button:hover {
          background: #1e293b;
        }

        .nav-button.active {
          color: #4f46e5;
          background: #eef2ff;
        }

        .dark-dashboard .nav-button.active {
          background: #1e293b;
        }

        .sidebar-bottom {
          position: absolute;

          left: 15px;
          right: 15px;
          bottom: 20px;
        }

        .theme-button {
          width: 100%;

          padding: 10px;

          border:
            1px solid #e5e7eb;

          border-radius: 10px;

          color: #64748b;
          background: transparent;

          cursor: pointer;

          font-size: 11px;
          font-weight: 700;
        }

        .dark-dashboard .theme-button {
          border-color: #374151;
          color: #cbd5e1;
        }

        /* =========================
           MAIN
        ========================= */

        .main {
          width: calc(100% - 245px);

          margin-left: 245px;

          padding: 25px 30px;

          min-height: 100vh;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 25px;
        }

        .page-title {
          margin: 0;

          font-size: 25px;
          font-weight: 900;
        }

        .page-subtitle {
          margin: 5px 0 0;

          color: #94a3b8;

          font-size: 12px;
        }

        .dark-dashboard .page-subtitle {
          color: #64748b;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .notification {
          position: relative;

          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid #e5e7eb;

          border-radius: 11px;

          background: white;

          cursor: pointer;

          font-size: 17px;
        }

        .dark-dashboard .notification {
          background: #1f2937;
          border-color: #374151;
        }

        .notification-count {
          position: absolute;

          top: -4px;
          right: -4px;

          min-width: 17px;
          height: 17px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: white;
          background: #ef4444;

          font-size: 8px;
          font-weight: 900;
        }

        .user-mini {
          display: flex;
          align-items: center;
          gap: 9px;

          padding: 5px 10px 5px 5px;

          border:
            1px solid #e5e7eb;

          border-radius: 50px;

          background: white;
        }

        .dark-dashboard .user-mini {
          background: #1f2937;
          border-color: #374151;
        }

        .avatar {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: white;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #9333ea
            );

          font-size: 13px;
          font-weight: 900;
        }

        .user-name {
          font-size: 10px;
          font-weight: 900;
        }

        .user-role {
          margin-top: 2px;

          color: #94a3b8;

          font-size: 8px;
        }

        /* =========================
           LOGIN CARD
        ========================= */

        .login-card {
          max-width: 520px;

          margin: 70px auto;

          padding: 45px 35px;

          text-align: center;

          background: white;

          border:
            1px solid #e5e7eb;

          border-radius: 22px;

          box-shadow:
            0 25px 60px
            rgba(15,23,42,0.10);

          animation: cardIn 0.5s ease;
        }

        .dark-dashboard .login-card {
          background: #1f2937;
          border-color: #374151;
        }

        .login-icon {
          width: 70px;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 auto 18px;

          border-radius: 20px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          font-size: 30px;

          box-shadow:
            0 15px 30px
            rgba(79,70,229,0.25);
        }

        .login-title {
          margin: 0;

          font-size: 24px;
          font-weight: 900;
        }

        .login-text {
          margin: 10px auto 25px;

          max-width: 380px;

          color: #94a3b8;

          font-size: 12px;
          line-height: 1.6;
        }

        .login-button {
          padding: 13px 28px;

          border: none;
          border-radius: 11px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          cursor: pointer;

          font-size: 12px;
          font-weight: 900;

          box-shadow:
            0 10px 22px
            rgba(79,70,229,0.25);

          transition: 0.2s ease;
        }

        .login-button:hover {
          transform: translateY(-2px);
        }

        /* =========================
           WELCOME
        ========================= */

        .welcome-card {
          position: relative;
          overflow: hidden;

          padding: 25px 28px;

          border-radius: 18px;

          color: white;

          background:
            linear-gradient(
              120deg,
              #4f46e5,
              #6366f1,
              #7c3aed
            );

          box-shadow:
            0 15px 35px
            rgba(79,70,229,0.20);

          margin-bottom: 22px;
        }

        .welcome-card::after {
          content: "";

          position: absolute;

          width: 220px;
          height: 220px;

          right: -70px;
          top: -100px;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.10);
        }

        .welcome-title {
          position: relative;
          z-index: 2;

          margin: 0;

          font-size: 21px;
          font-weight: 900;
        }

        .welcome-text {
          position: relative;
          z-index: 2;

          margin: 7px 0 0;

          color: rgba(255,255,255,0.78);

          font-size: 11px;
        }

        .admin-badge {
          position: relative;
          z-index: 2;

          display: inline-block;

          margin-top: 13px;
          padding: 6px 10px;

          color: #713f12;
          background: #fef3c7;

          border-radius: 7px;

          font-size: 9px;
          font-weight: 900;
        }

        /* =========================
           STATS
        ========================= */

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 14px;

          margin-bottom: 22px;
        }

        .stat-card {
          padding: 17px;

          background: white;

          border:
            1px solid #e5e7eb;

          border-radius: 15px;

          transition: 0.25s ease;
        }

        .dark-dashboard .stat-card,
        .dark-dashboard .content-card {
          background: #1f2937;
          border-color: #374151;
        }

        .stat-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 12px 25px
            rgba(15,23,42,0.08);
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          font-size: 17px;
        }

        .stat-value {
          margin: 13px 0 3px;

          color: #111827;

          font-size: 22px;
          font-weight: 900;
        }

        .dark-dashboard .stat-value {
          color: #f8fafc;
        }

        .stat-title {
          color: #94a3b8;

          font-size: 10px;
          font-weight: 700;
        }

        /* =========================
           CONTENT
        ========================= */

        .content-grid {
          display: grid;

          grid-template-columns:
            1.5fr 1fr;

          gap: 18px;
        }

        .content-card {
          padding: 20px;

          background: white;

          border:
            1px solid #e5e7eb;

          border-radius: 17px;
        }

        .card-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .card-title {
          margin: 0;

          font-size: 14px;
          font-weight: 900;
        }

        .view-all {
          border: none;

          color: #4f46e5;
          background: transparent;

          cursor: pointer;

          font-size: 10px;
          font-weight: 800;
        }

        .activity {
          display: flex;
          align-items: center;
          gap: 12px;

          padding: 11px 0;

          border-bottom:
            1px solid #f1f5f9;
        }

        .dark-dashboard .activity {
          border-color: #374151;
        }

        .activity:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #eef2ff;

          font-size: 14px;
        }

        .activity-name {
          margin: 0;

          font-size: 11px;
          font-weight: 800;
        }

        .activity-time {
          margin-top: 3px;

          color: #94a3b8;

          font-size: 9px;
        }

        /* =========================
           SYSTEM STATUS
        ========================= */

        .status-item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 11px 0;

          border-bottom:
            1px solid #f1f5f9;
        }

        .dark-dashboard .status-item {
          border-color: #374151;
        }

        .status-item:last-child {
          border-bottom: none;
        }

        .status-name {
          display: flex;
          align-items: center;
          gap: 8px;

          font-size: 10px;
          font-weight: 700;
        }

        .status-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #22c55e;
          box-shadow:
            0 0 0 4px
            rgba(34,197,94,0.10);
        }

        .status-online {
          color: #16a34a;

          font-size: 9px;
          font-weight: 900;
        }

        /* =========================
           ADMIN PANEL
        ========================= */

        .admin-panel {
          margin-top: 18px;

          padding: 18px;

          border:
            1px solid #fde68a;

          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              #fffbeb,
              #fef3c7
            );
        }

        .admin-panel-title {
          margin: 0;

          color: #92400e;

          font-size: 13px;
          font-weight: 900;
        }

        .admin-panel-text {
          margin: 5px 0 15px;

          color: #a16207;

          font-size: 10px;
          line-height: 1.5;
        }

        .admin-actions {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 8px;
        }

        .admin-action {
          padding: 10px 5px;

          border:
            1px solid #fcd34d;

          border-radius: 9px;

          color: #92400e;
          background: rgba(255,255,255,0.55);

          cursor: pointer;

          font-size: 9px;
          font-weight: 800;
        }

        .admin-action:hover {
          background: white;
        }

        /* =========================
           LOGOUT
        ========================= */

        .logout-button {
          width: 100%;

          margin-top: 25px;
          padding: 12px;

          border: none;
          border-radius: 10px;

          color: #dc2626;
          background: #fef2f2;

          cursor: pointer;

          font-size: 11px;
          font-weight: 900;

          transition: 0.2s ease;
        }

        .logout-button:hover {
          background: #fee2e2;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1000px) {
          .stats-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .sidebar {
            width: 70px;
            padding: 15px 8px;
          }

          .logo {
            justify-content: center;
            padding-bottom: 20px;
          }

          .logo-text,
          .logo-subtitle,
          .nav-title,
          .nav-button span:last-child,
          .sidebar-bottom {
            display: none;
          }

          .nav-button {
            justify-content: center;
            padding: 12px;
          }

          .main {
            width: calc(100% - 70px);
            margin-left: 70px;
            padding: 18px;
          }
        }

        @media (max-width: 500px) {
          .topbar {
            align-items: flex-start;
          }

          .user-mini {
            display: none;
          }

          .page-title {
            font-size: 21px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .welcome-card {
            padding: 20px;
          }

          .welcome-title {
            font-size: 18px;
          }

          .admin-actions {
            grid-template-columns: 1fr;
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>


      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">

          <div className="logo-icon">
            ⚡
          </div>

          <div>

            <div className="logo-text">
              Enterprise
            </div>

            <div className="logo-subtitle">
              CONTROL PORTAL
            </div>

          </div>

        </div>


        <div className="nav-title">
          Main Menu
        </div>


        <button
          className={
            activeTab === 'Dashboard'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Dashboard')
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </button>


        <button
          className={
            activeTab === 'Projects'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Projects')
          }
        >
          <span>📁</span>
          <span>Projects</span>
        </button>


        <button
          className={
            activeTab === 'Tasks'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Tasks')
          }
        >
          <span>📋</span>
          <span>Tasks</span>
        </button>


        <button
          className={
            activeTab === 'Team'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Team')
          }
        >
          <span>👥</span>
          <span>Team</span>
        </button>


        <div className="nav-title">
          System
        </div>


        <button
          className={
            activeTab === 'Security'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Security')
          }
        >
          <span>🔐</span>
          <span>Security</span>
        </button>


        <button
          className={
            activeTab === 'Settings'
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() =>
            setActiveTab('Settings')
          }
        >
          <span>⚙️</span>
          <span>Settings</span>
        </button>


        <div className="sidebar-bottom">

          <button
            className="theme-button"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? '☀️ Light Mode'
              : '🌙 Dark Mode'
            }
          </button>

        </div>

      </aside>


      {/* MAIN */}

      <main className="main">

        <div className="topbar">

          <div>

            <h1 className="page-title">
              {activeTab}
            </h1>

            <p className="page-subtitle">
              Manage your enterprise workspace
              from one place.
            </p>

          </div>


          <div className="top-actions">

            <button
              className="notification"
              onClick={clearNotifications}
              title="Clear notifications"
            >
              🔔

              {notifications > 0 && (
                <span className="notification-count">
                  {notifications}
                </span>
              )}

            </button>


            <div className="user-mini">

              <div className="avatar">
                A
              </div>

              <div>

                <div className="user-name">
                  Arpi Patel
                </div>

                <div className="user-role">
                  {isAdmin
                    ? 'Administrator'
                    : 'Employee'
                  }
                </div>

              </div>

            </div>

          </div>

        </div>


        {!isLoggedIn ? (

          /* LOGIN */

          <div className="login-card">

            <div className="login-icon">
              🔐
            </div>

            <h2 className="login-title">
              Enterprise Portal
            </h2>

            <p className="login-text">
              Welcome to your secure enterprise
              workspace. Login to access projects,
              tasks, team management and system
              controls.
            </p>

            <button
              className="login-button"
              onClick={toggleLogin}
            >
              🔓 Login to Dashboard
            </button>

          </div>

        ) : (

          <>

            {/* WELCOME */}

            <div className="welcome-card">

              <h2 className="welcome-title">
                Welcome Back, Arpi! 👋
              </h2>

              <p className="welcome-text">
                You are securely connected to the
                internal enterprise server.
              </p>

              {isAdmin && (

                <span className="admin-badge">
                  ⚡ ADMIN PRIVILEGES ACTIVE
                </span>

              )}

            </div>


            {/* STATS */}

            <div className="stats-grid">

              {stats.map((stat) => (

                <div
                  className="stat-card"
                  key={stat.title}
                >

                  <div className="stat-top">

                    <div
                      className="stat-icon"
                      style={{
                        color: stat.color,
                        background:
                          `${stat.color}15`,
                      }}
                    >
                      {stat.icon}
                    </div>

                  </div>

                  <div className="stat-value">
                    {stat.value}
                  </div>

                  <div className="stat-title">
                    {stat.title}
                  </div>

                </div>

              ))}

            </div>


            {/* CONTENT */}

            <div className="content-grid">

              {/* ACTIVITY */}

              <div className="content-card">

                <div className="card-heading">

                  <h3 className="card-title">
                    Recent Activity
                  </h3>

                  <button className="view-all">
                    View All →
                  </button>

                </div>


                {activities.map((activity) => (

                  <div
                    className="activity"
                    key={activity.title}
                  >

                    <div className="activity-icon">
                      {activity.icon}
                    </div>

                    <div>

                      <p className="activity-name">
                        {activity.title}
                      </p>

                      <p className="activity-time">
                        {activity.time}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* SYSTEM STATUS */}

              <div className="content-card">

                <div className="card-heading">

                  <h3 className="card-title">
                    System Status
                  </h3>

                  <span className="status-online">
                    ALL SYSTEMS OK
                  </span>

                </div>


                <div className="status-item">

                  <span className="status-name">
                    <span className="status-dot"></span>
                    API Server
                  </span>

                  <span className="status-online">
                    Online
                  </span>

                </div>


                <div className="status-item">

                  <span className="status-name">
                    <span className="status-dot"></span>
                    Database
                  </span>

                  <span className="status-online">
                    Online
                  </span>

                </div>


                <div className="status-item">

                  <span className="status-name">
                    <span className="status-dot"></span>
                    Authentication
                  </span>

                  <span className="status-online">
                    Secure
                  </span>

                </div>


                <div className="status-item">

                  <span className="status-name">
                    <span className="status-dot"></span>
                    Backup System
                  </span>

                  <span className="status-online">
                    Active
                  </span>

                </div>

              </div>

            </div>


            {/* ADMIN PANEL */}

            {isAdmin && (

              <div className="admin-panel">

                <h3 className="admin-panel-title">
                  ⚡ Administrator Control Center
                </h3>

                <p className="admin-panel-text">
                  Advanced controls are available
                  because administrator privileges
                  are currently active.
                </p>

                <div className="admin-actions">

                  <button className="admin-action">
                    🖥️ System Diagnostics
                  </button>

                  <button className="admin-action">
                    👥 Manage Users
                  </button>

                  <button className="admin-action">
                    🔐 Security Logs
                  </button>

                </div>

              </div>

            )}


            {/* ROLE BUTTON */}

            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '20px',
              }}
            >

              <button
                className="login-button"
                onClick={toggleAdmin}
              >
                {isAdmin
                  ? '👤 Switch to Staff'
                  : '⚡ Switch to Admin'
                }
              </button>

            </div>


            {/* LOGOUT */}

            <button
              className="logout-button"
              onClick={toggleLogin}
            >
              🚪 Log Out
            </button>

          </>

        )}

      </main>

    </div>
  );
}

export default UserDashboard;
