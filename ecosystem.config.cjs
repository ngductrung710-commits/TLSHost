/**
 * PM2 process definition for the Hostinger VPS.
 *
 * Usage on the server:
 *   pm2 start ecosystem.config.cjs --env production
 *   pm2 save && pm2 startup      # survive reboots
 */
module.exports = {
  apps: [
    {
      name: "tlshost",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/var/www/tlshost",

      // Next 16 serves fine from a single process behind Nginx. Raise this to
      // "max" only after confirming the box has the RAM for it.
      instances: 1,
      exec_mode: "fork",

      autorestart: true,
      max_restarts: 10,
      min_uptime: "20s",
      max_memory_restart: "512M",

      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },

      error_file: "/var/log/pm2/tlshost-error.log",
      out_file: "/var/log/pm2/tlshost-out.log",
      merge_logs: true,
      time: true,
    },
  ],
};
