export function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 dw-grid opacity-60" />
      <div
        className="dw-orb absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 60%)" }}
      />
      <div
        className="dw-orb absolute top-20 right-[-120px] h-[460px] w-[460px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #d946ef 0%, transparent 60%)", animationDelay: "-6s" }}
      />
      <div
        className="dw-orb absolute top-[40%] left-[35%] h-[360px] w-[360px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 60%)", animationDelay: "-3s" }}
      />
    </div>
  );
}