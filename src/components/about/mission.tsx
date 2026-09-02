import {mission as cards} from "@/data/homeData";


export default function MissionVisionValues() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.number} className="relative flex flex-col">

              {/* Colored background layer */}
              <div className={`absolute bottom-0 left-0 right-0 h-[85%] rounded-2xl bg-zinc-400`} />

              {/* White inner card */}
              <div className="relative mx-4 mb-5 bg-white border hover:-translate-y-4 duration-300 transition-all rounded-2xl shadow-xl shadow-zinc-700/50 flex flex-col items-center text-center px-5 pt-6 pb-6 flex-1">

                {/* Icon */}
                <Icon className={`mb-3 sm:text-5xl text-3xl mt-1 ${card.iconColor || "text-color1"}`} />

                {/* Title */}
                <p className="text-xl md:text-2xl font-semibold tracking-widest uppercase text-gray-800 mb-3">
                  {card.title}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-gray-600 mb-3" />

                {/* Body — equal content, same line count */}
                <p className="max-sm:text-sm text-gray-600 font-medium leading-relaxed flex-1">
                  {card.body}
                </p>

                {/* Number badge */}
                {/* <div className={`absolute -bottom-3.5 left-1/2 -translate-x-1/2 rounded-lg px-4 py-1 text-xs font-semibold tracking-wider text-white ${card.badge}`}>
                  {card.number}
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}