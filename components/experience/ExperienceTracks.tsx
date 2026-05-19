import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { EXPERIENCE_TRACKS } from "@/lib/data/experience";

export function ExperienceTracks() {
  const tabs = EXPERIENCE_TRACKS.map((track) => {
    const Icon = track.icon;
    return {
      id: track.id,
      label: track.eyebrow,
      content: (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {track.eyebrow}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              {track.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              {track.description}
            </p>
          </div>
          <ul className="grid gap-3">
            {track.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ),
    };
  });

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Frentes de experiencia"
        title="Cuatro frentes donde el equipo ya entregó valor"
        description="Selecciona el frente que te interesa para ver dónde tenemos historia operativa real."
      />
      <Tabs
        ariaLabel="Frentes de experiencia"
        tabs={tabs}
        className="mt-10"
      />
    </Section>
  );
}
