import { type Locale } from "@/i18n";
import { FAQAccordion } from "@/components/FAQ/FAQAccordion";

export function FAQPage({ locale }: { locale: Locale }) {
  // Flatten all questions from all categories into a single array for accordion
  const allQuestions = [
    // Resistencia y Durabilidad
    {
      question:
        locale === "es"
          ? "¿Son resistentes las bicicletas de bambú?"
          : locale === "ca"
            ? "Són resistents les bicicletes de bambú?"
            : "Are Bamboo bikes resistant?",
      answer:
        locale === "es"
          ? "Sí, nuestros cuadros han pasado por todo tipo de pruebas durante más de seis años. No solo relacionadas con los estándares IRAM 40020, sino también pruebas destructivas y de uso real. Han demostrado ser más resistentes que materiales convencionales como el aluminio."
          : locale === "ca"
            ? "Sí, els nostres quadres han passat per tot tipus de proves durant més de sis anys. No només relacionades amb els estàndards IRAM 40020, sinó també proves destructives i d'ús real. Han demostrat ser més resistents que materials convencionals com l'alumini."
            : "Yes, our frames were put through all sorts of trials for more than six years. Not only related to the IRAM 40020 standards, but also to destructive and real use tests. They have shown to be stronger over conventional materials such as aluminum.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué resisten tanto?"
          : locale === "ca"
            ? "Per què resisteixen tant?"
            : "Why do they endure so much?",
      answer:
        locale === "es"
          ? "Las cañas de bambú tienen fibras que recorren toda la longitud longitudinal de cada caña. Esto permite que la caña mantenga su resistencia y fuerza, incluso cuando se agrietan. En términos de resistencia, las cañas de bambú son superiores al aluminio y el carbono ya que estos, una vez agrietados, pierden su resistencia estructural y ya no son utilizables. Por el contrario, una caña de bambú agrietada aún puede usarse sin riesgo."
          : locale === "ca"
            ? "Les canyes de bambú tenen fibres que recorren tota la longitud longitudinal de cada canya. Això permet que la canya mantingui la seva resistència i força, fins i tot quan es fissuren. En termes de resistència, les canyes de bambú són superiors a l'alumini i el carboni ja que aquests, un cop fissurats, perden la seva resistència estructural i ja no són utilitzables. Per contra, una canya de bambú fissurada encara es pot utilitzar sense risc."
            : "Bamboo canes have fibers that run through the entire longitudinal length of each cane. This allows the cane to retain its toughness and strength, even when they are torn. In terms of resistance bamboo canes are superior to aluminum and carbon since these, once cracked, lose their structural strength and are no longer usable. On the opposite, a cracked bamboo cane can still be used without risk.",
    },
    {
      question:
        locale === "es"
          ? "¿Cuánto peso soporta?"
          : locale === "ca"
            ? "Quin pes suporta?"
            : "How much weight does it stand?",
      answer:
        locale === "es"
          ? "El peso máximo recomendado es de 110kg."
          : locale === "ca"
            ? "El pes màxim recomanat és de 110kg."
            : "The maximum recommended weight is 110kgs.",
    },
    // Construcción y Materiales
    {
      question:
        locale === "es"
          ? "¿De qué están hechas las uniones?"
          : locale === "ca"
            ? "De què estan fetes les unions?"
            : "What are the joints made of?",
      answer:
        locale === "es"
          ? "Las uniones están hechas a mano con compuestos de fibra aeronáutica (vidrio y/o carbono) y resina epoxi. Esta tecnología es la misma utilizada en la construcción de barcos, aviones y en la industria aeroespacial."
          : locale === "ca"
            ? "Les unions estan fetes a mà amb compostos de fibra aeronàutica (vidre i/o carboni) i resina epoxi. Aquesta tecnologia és la mateixa utilitzada en la construcció de vaixells, avions i en la indústria aeroespacial."
            : "The joints are handmade with aeronautical fiber composites (glass and/or carbon) and epoxy resin. This technology is the same used in the construction of ships, aircraft and in the aerospace industry.",
    },
    {
      question:
        locale === "es"
          ? "¿Está recubierto de caña?"
          : locale === "ca"
            ? "Està recobert de canya?"
            : "Is it coated in cane?",
      answer:
        locale === "es"
          ? "¡NOOO! ¡Están hechas DE caña!"
          : locale === "ca"
            ? "¡NOOO! Estan fetes DE canya!"
            : "NOOO! They are made OF cane!",
    },
    {
      question:
        locale === "es"
          ? "¿Es caña real?"
          : locale === "ca"
            ? "És canya real?"
            : "Is it real cane?",
      answer:
        locale === "es"
          ? "¡Sí, es caña real!"
          : locale === "ca"
            ? "Sí, és canya real!"
            : "Yes, it is real cane!",
    },
    // Comodidad y Rendimiento
    {
      question:
        locale === "es"
          ? "¿Cuál es la ventaja comparada con una bicicleta convencional?"
          : locale === "ca"
            ? "Quina és l'avantatge comparada amb una bicicleta convencional?"
            : "What is the advantage compared to a conventional bike?",
      answer:
        locale === "es"
          ? "La principal ventaja de un cuadro de bambú es funcional: ofrecen un viaje más cómodo que las bicicletas clásicas. El material de bambú tiene propiedades elásticas y flexibles increíbles y permite una mejor absorción de los golpes causados por las irregularidades del camino."
          : locale === "ca"
            ? "El principal avantatge d'un quadre de bambú és funcional: ofereixen un viatge més còmode que les bicicletes clàssiques. El material de bambú té propietats elàstiques i flexibles increïbles i permet una millor absorció dels cops causats per les irregularitats del camí."
            : "The main advantage of a bamboo frame is functional – they offer a more comfortable ride than classic bicycles. Bamboo material has incredible elastic and flexible properties and allows a better absorption of shock caused by road irregularities.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué son más cómodas?"
          : locale === "ca"
            ? "Per què són més còmodes?"
            : "Why are they more comfortable?",
      answer:
        locale === "es"
          ? "Primero, imagina un golpe causado por un hoyo en el camino. Ahora imagina el impacto transmitido por un material rígido (como carbono y/o aluminio) al sillín de la bicicleta y luego al ciclista. Ahora imagina ese mismo golpe pero transmitido a través de una caña de bambú. Gracias a su elasticidad y flexibilidad, el bambú absorbe la vibración para que el ciclista no sienta tanto el impacto. La mejor manera de sentir la diferencia es probarlo, ven y prueba una de nuestras bicicletas."
          : locale === "ca"
            ? "Primer, imagina un cop causat per un forat al camí. Ara imagina l'impacte transmès per un material rígid (com carboni i/o alumini) al seient de la bicicleta i després al ciclista. Ara imagina aquest mateix cop però transmès a través d'una canya de bambú. Gràcies a la seva elasticitat i flexibilitat, el bambú absorbeix la vibració perquè el ciclista no senti tant l'impacte. La millor manera de sentir la diferència és provar-ho, vine i prova una de les nostres bicicletes."
            : "First, imagine a hit caused by a hole on the road. Now imagine the impact transmitted by a rigid material (such as carbon and/or aluminum) to the saddle of the bike and then the rider. Now imagine that same hit but transmitted through a bamboo cane. Thanks to its elasticity and flexibility, the bamboo absorbs the vibration so the rider doesn't feel so much the impact. The best way to feel the difference is to try it, come and test one of our bikes.",
    },
    {
      question:
        locale === "es"
          ? "¿Son ligeras?"
          : locale === "ca"
            ? "Són lleugeres?"
            : "Are they light?",
      answer:
        locale === "es"
          ? "El peso de un cuadro de bambú es comparable a un cuadro de aluminio. El peso nunca es exacto, ya que cada caña es única."
          : locale === "ca"
            ? "El pes d'un quadre de bambú és comparable a un quadre d'alumini. El pes mai és exacte, ja que cada canya és única."
            : "The weight of a bamboo frame is comparable to an aluminium frame. The weight is never exact, as each cane is unique.",
    },
    // Durabilidad y Vida Útil
    {
      question:
        locale === "es"
          ? "¿Cuánto dura el bambú?"
          : locale === "ca"
            ? "Quant dura el bambú?"
            : "How long does Bamboo last?",
      answer:
        locale === "es"
          ? "El bambú es un material muy duradero, sin embargo no podemos dar un número exacto. Es comparable a la madera, si se le da el cuidado adecuado, mejora con los años. Es común encontrar objetos muy antiguos hechos de bambú en todo el mundo."
          : locale === "ca"
            ? "El bambú és un material molt durador, però no podem donar un número exacte. És comparable a la fusta, si se li dona la cura adequada, millora amb els anys. És comú trobar objectes molt antics fets de bambú a tot el món."
            : "Bamboo is a very lasting material however we cannot give you an exact number. It is comparable to wood, if proper care is given, it gets better over the years. It is common to find very old objects made of bamboo across the world.",
    },
    {
      question:
        locale === "es"
          ? "¿Qué debo hacer si tengo una rotura de bambú?"
          : locale === "ca"
            ? "Què haig de fer si tinc una ruptura de bambú?"
            : "What should I do if I get a torn Bamboo?",
      answer:
        locale === "es"
          ? "Por la estructura del bambú, una rotura no afecta su rendimiento, por lo que puedes seguir usándola sin temor. Es importante que nos notifiques cualquier rotura para validar tu garantía. MALON Bambubikes es responsable de estos problemas mientras tu garantía esté vigente, terminando este período, podemos reparar el problema a bajo costo."
          : locale === "ca"
            ? "Per l'estructura del bambú, una ruptura no afecta el seu rendiment, per tant pots seguir utilitzant-la sense por. És important que ens notifiquis qualsevol ruptura per validar la teva garantia. MALON Bambubikes és responsable d'aquests problemes mentre la teva garantia estigui vigent, acabant aquest període, podem reparar el problema a baix cost."
            : "By the structure of bamboo a tear does not affect its performance, so you can continue to use it without fear, it is important that you notify us any tears to validate your warranty. MALON Bambubikes is responsible for these problems while your warranty is valid, ending this period, we can repair the problem at low cost.",
    },
    // Cuidado y Mantenimiento
    {
      question:
        locale === "es"
          ? "¿Necesita algún cuidado especial?"
          : locale === "ca"
            ? "Necessita alguna cura especial?"
            : "Does it need any special care?",
      answer:
        locale === "es"
          ? "Como cualquier objeto que amamos, no se recomienda dejar tu bicicleta de bambú expuesta al sol y la lluvia todo el tiempo. Recomendamos mantenimiento y calibración regulares estándar, hechos por uno mismo o por alguna tienda de bicicletas de confianza."
          : locale === "ca"
            ? "Com qualsevol objecte que estimem, no es recomana deixar la teva bicicleta de bambú exposada al sol i la pluja tot el temps. Recomanem manteniment i calibratge regulars estàndard, fets per un mateix o per alguna botiga de bicicletes de confiança."
            : "Like any object we love, it is not recommended to leave your bamboo bike exposed to the sun and the rain all the time. We'd advice with regular maintenance and calibration standard, done by oneself, or by some trusted bike shop.",
    },
    {
      question:
        locale === "es"
          ? "¿Qué pasa si se moja?"
          : locale === "ca"
            ? "Què passa si es mulla?"
            : "What happens if it gets wet?",
      answer:
        locale === "es"
          ? "¡No hay nada de qué preocuparse! Las cañas de bambú están protegidas por varias capas de barniz de poliuretano, que es una de las pinturas más impermeables del mundo. También tiene filtro UV. Sin embargo, se recomienda secarla rápidamente para que los componentes metálicos de la bicicleta no se oxiden."
          : locale === "ca"
            ? "No hi ha res de què preocupar-se! Les canyes de bambú estan protegides per diverses capes de vernís de poliuretà, que és una de les pintures més impermeables del món. També té filtre UV. No obstant això, es recomana assecar-la ràpidament perquè els components metàl·lics de la bicicleta no s'oxiden."
            : "Nothing to worry about! The bamboo canes are protected by several layers of polyurethane varnish which is one of the most waterproof paintings in the world. It also has UV filter. However, it is recommended to dry it quickly so that the metal components of the bike do not get rusted.",
    },
    {
      question:
        locale === "es"
          ? "¿Cómo cuido mi Bambubike?"
          : locale === "ca"
            ? "Com cuido la meva Bambubike?"
            : "How do I take care of my Bambubike?",
      answer:
        locale === "es"
          ? "Es importante que tu MALON BAMBUBIKE tenga los siguientes cuidados: hidrata la madera ocasionalmente con aceite para madera, limpia el barro y el polvo de madera frecuentemente, mantén siempre las partes mecánicas limpias y lubricadas, y dale servicio completo a la bicicleta al menos una vez al año."
          : locale === "ca"
            ? "És important que la teva MALON BAMBUBIKE tingui les següents cures: hidrata la fusta ocasionalment amb oli per a fusta, neteja el fang i la pols de fusta freqüentment, mantén sempre les parts mecàniques netes i lubricades, i dona servei complet a la bicicleta almenys un cop a l'any."
            : "It is important for your MALON BAMBUBIKE to have the following care: moisturize the wood occasionally with wood oil, clean mud and wood dust often, always keep mechanical parts clean and lubricated, and give full service to the bicycle at least once a year.",
    },
    // Compatibilidad y Servicio
    {
      question:
        locale === "es"
          ? "¿Puedo conseguir los componentes en cualquier tienda de bicicletas?"
          : locale === "ca"
            ? "Puc aconseguir els components a qualsevol botiga de bicicletes?"
            : "Can I get the components in any bicycle shop?",
      answer:
        locale === "es"
          ? "Sí, cada parte de la bicicleta es 100% estándar. Puedes conseguir y/o reemplazar en cualquier tienda de bicicletas."
          : locale === "ca"
            ? "Sí, cada part de la bicicleta és 100% estàndard. Pots aconseguir i/o substituir a qualsevol botiga de bicicletes."
            : "Yes, every part of the bike is 100% standard. You can get and/or replace at any bicycle shop.",
    },
    // Sostenibilidad
    {
      question:
        locale === "es"
          ? "¿Son más ecológicas que otras bicicletas?"
          : locale === "ca"
            ? "Són més ecològiques que altres bicicletes?"
            : "Are they more ecological than other bikes?",
      answer:
        locale === "es"
          ? "La bicicleta más ecológica es la que más uses."
          : locale === "ca"
            ? "La bicicleta més ecològica és la que més uses."
            : "The most ecological bicycle is the one you ride most.",
    },
    {
      question:
        locale === "es"
          ? "¿Por qué dices que son ecológicas?"
          : locale === "ca"
            ? "Per què dius que són ecològiques?"
            : "Why do you say they are ecological?",
      answer:
        locale === "es"
          ? "Todas las bicicletas son amigables con el medio ambiente porque usarlas nos hace movernos hacia una forma de vida sostenible y respetuosa con el medio ambiente. Las bicicletas de bambú están hechas de una materia prima natural con una de las tasas más altas de renovabilidad. Su extracción y tratamiento no requiere ningún proceso contaminante. Y las plantaciones de bambú producen 35% más oxígeno que otras plantaciones similares. Pero para ser realmente ecológica, debe ser usada. Así que... La bicicleta más verde es la que más usas."
          : locale === "ca"
            ? "Totes les bicicletes són amigables amb el medi ambient perquè usar-les ens fa moure cap a una forma de vida sostenible i respectuosa amb el medi ambient. Les bicicletes de bambú estan fetes d'una matèria primera natural amb una de les taxes més altes de renovabilitat. La seva extracció i tractament no requereix cap procés contaminant. I les plantacions de bambú produeixen 35% més oxigen que altres plantacions similars. Però per ser realment ecològica, ha de ser usada. Així que... La bicicleta més verda és la que més uses."
            : "All bicycles are environmentally friendly because using them makes us move to a sustainable and environmentally friendly way of living. Bamboo bikes are made from a natural raw material with one of the highest rates of all renewability. Its extraction and treatment does not require any polluting process. And bamboo plantations produce 35% more oxygen than similar other plantations. But to be really ecological, it must be ridden. So… The greenest bike is the one you use most.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-primary-600 font-medium text-center mb-2">
            {locale === "es" && "Preguntas Frecuentes"}
            {locale === "en" && "FAQs"}
            {locale === "ca" && "Preguntes Freqüents"}
          </h6>
          <h2 className="text-4xl font-bold text-center text-gray-900 leading-[3.25rem]">
            {locale === "es" && "Preguntas frecuentes"}
            {locale === "en" && "Frequently asked questions"}
            {locale === "ca" && "Preguntes freqüents"}
          </h2>
        </div>

        <FAQAccordion questions={allQuestions} locale={locale} />
      </div>
    </section>
  );
}
