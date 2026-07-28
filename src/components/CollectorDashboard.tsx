import {
  Wallet,
  FileText,
  FileMinus,
  CalendarClock,
  MousePointerClick,
} from "lucide-react";

export type QuickKey =
  | "exemptions"
  | "reschedules"
  | "wallet"
  | "cc"
  | "al"
  | "pf"
  | "salary"
  | "deceased"
  | "sibel";

export function CollectorDashboard({
  collected,
  totalAccounts,
  totalBalance,
  filteredAccounts,
  filteredBalance,
  filteredPF,
  filteredAL,
  filteredCC,
  filteredSalary,
  filteredDeceased,
  filteredSibel,
  badges,
  employeeId,
  onSelectAction,
  onCollectedClick,
}: {
  collected: number;
  totalAccounts: number;
  totalBalance: number;
  filteredAccounts: number;
  filteredBalance: number;
  filteredPF: number;
  filteredAL: number;
  filteredCC: number;
  filteredSalary: number;
  filteredDeceased: number;
  filteredSibel: number;
  badges: { promises: number; exemptions: number; reschedules: number };
  employeeId?: string;
  onSelectAction: (key: QuickKey) => void;
  onCollectedClick?: () => void;
}) {
  void collected;
  void totalAccounts;
  void totalBalance;
  void filteredAccounts;
  void filteredBalance;
  void filteredPF;
  void filteredAL;
  void filteredCC;
  void filteredSalary;
  void filteredDeceased;
  void employeeId;
  void onCollectedClick;

  const cardCls =
    "bg-white border border-[#e5e2dc] p-4 sm:p-5 rounded-[24px] text-[#133E35] flex flex-col gap-4 select-none w-full max-w-md mx-auto shadow-sm font-sans";
  const fieldCls = "bg-[#eeece7] border border-[#e5e2dc]";
  const buttonFieldCls = `${fieldCls} hover:bg-[#e5e2dc] active:scale-95 transition-all`;

  return (
    <div className="flex flex-col gap-3 w-full" dir="rtl">
      {/* Card 1: Portfolio Overview */}
      <div className={cardCls}>
        <button
          type="button"
          onClick={() => onSelectAction("sibel")}
          className="rounded-[14px] px-3 py-2.5 flex items-center justify-between w-full cursor-pointer select-none text-[#133E35] font-sans text-right bg-[#f3e9c7]/70 hover:bg-[#ecdfb1]/80 active:scale-95 transition-all shadow-sm border border-[#e8dbab]/60"
        >
          <div className="flex items-center gap-2">
            <FileText className="size-3.5 text-[#f59e0b]" />
            <span className="text-[10.5px] font-bold text-[#133E35] text-right">
              عملاء لديهم طلبات سابقة
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px] text-[#234E45] font-bold tabular-nums">
            <MousePointerClick className="size-3.5 text-[#3b82f6]" />
            <span className="text-[#133E35] font-black inline-block ml-1">{filteredSibel}</span>
            حساب
          </div>
        </button>
      </div>

      {/* Card 2: Actions */}
      <div className={cardCls}>
        <div className="grid grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => onSelectAction("exemptions")}
            className={`relative ${buttonFieldCls} rounded-[15px] p-2 flex flex-col items-center justify-center gap-1.5 h-20 text-center select-none cursor-pointer text-[#133E35]`}
          >
            <FileMinus className="size-4.5 text-[#ec4899]" />
            <span className="text-[9.5px] font-extrabold leading-tight whitespace-nowrap">
              طلبات الإعفاء
            </span>
            {badges.exemptions > 0 && (
              <span className="absolute -top-1 -left-1 bg-[#ef4444] text-white text-[8px] font-black size-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {badges.exemptions}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectAction("reschedules")}
            className={`relative ${buttonFieldCls} rounded-[15px] p-2 flex flex-col items-center justify-center gap-1.5 h-20 text-center select-none cursor-pointer text-[#133E35]`}
          >
            <CalendarClock className="size-4.5 text-[#3b82f6]" />
            <span className="text-[9.5px] font-extrabold leading-tight whitespace-nowrap">
              طلبات الجدولة
            </span>
            {badges.reschedules > 0 && (
              <span className="absolute -top-1 -left-1 bg-[#ef4444] text-white text-[8px] font-black size-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {badges.reschedules}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectAction("wallet")}
            className={`relative ${buttonFieldCls} rounded-[15px] p-2 flex flex-col items-center justify-center gap-1.5 h-20 text-center select-none cursor-pointer text-[#133E35]`}
          >
            <Wallet className="size-4.5 text-amber-500" />
            <span className="text-[9.5px] font-extrabold leading-tight whitespace-nowrap">
              محفظتي
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
