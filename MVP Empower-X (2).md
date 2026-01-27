# Dataset Energético Horario para Flexibilidad y PED – Rubí

*(PED Rubí Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos utilizados en el caso de uso **PED Rubí**, orientado a la planificación y operación de **Distritos de Energía Positiva (PEDs)**, autoconsumo compartido, gestión de flexibilidad y carga 100 % renovable.

El dataset proporciona una visión horaria y gobernada del comportamiento energético de los puntos de suministro urbanos, permitiendo ejecutar algoritmos de predicción, optimización de excedentes, simulación y certificación energética dentro de un entorno **Compute-to-Data**, sin exponer datos brutos.

---

## Alcance y Consideraciones Técnicas

Dado el volumen y la criticidad de los datos energéticos urbanos, el dataset **no devuelve históricos completos ni información innecesaria**. En su lugar:

* Los datos están **filtrados por un periodo temporal concreto** (día, semana o mes)

* La resolución es **horaria**

* Solo se incluyen los **campos estrictamente necesarios** para los algoritmos habilitados

* El acceso está limitado a ejecuciones algorítmicas autorizadas

Este diseño permite operar de forma eficiente y conforme a los requisitos regulatorios de datos energéticos.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo las reglas comunes del ecosistema PED Rubí

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos; solo a resultados derivados y agregados.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos urbanos, incluyendo edificios públicos, activos municipales, comunidades energéticas y puntos con generación distribuida.

Cada registro representa el comportamiento energético de **un punto de suministro (CUPS) en una hora concreta**.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común y reutilizable en todo el ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

Los campos de generación y exportación pueden ser nulos según el tipo de activo.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identifica de forma única un punto de suministro dentro del entorno urbano, sin permitir la identificación directa de titulares o activos críticos.

* **timestamp**  
   Permite análisis temporales, predicción de demanda, simulación de escenarios y coordinación de flexibilidad.

* **energy\_consumed\_kwh**  
   Energía demandada por el punto de suministro durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía producida localmente (por ejemplo, fotovoltaica municipal o comunitaria), cuando aplica.

* **energy\_exported\_kwh**  
   Excedente energético vertido a red, relevante para autoconsumo compartido y optimización PED.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Predicción energética horaria**

* **Gestión y agregación de flexibilidad**

* **Optimización de autoconsumo compartido**

* **Simulación de escenarios PED**

* **Cálculo de indicadores de sostenibilidad y certificación**

* **Auditoría energética y trazabilidad**

Cada algoritmo accede únicamente a los campos necesarios para su función.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos y ejecuciones controlados por políticas de gobernanza

* Uso de mecanismos de auditoría y trazabilidad

* Resultados siempre agregados o derivados

Este enfoque es coherente con los requisitos europeos de soberanía del dato, privacidad y regulación energética.

---

## Resumen

El dataset PED Rubí proporciona una **vista horaria, estructurada y gobernada** del consumo, la generación y los excedentes energéticos asociados a puntos de suministro urbanos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos avanzados de predicción, flexibilidad, simulación y certificación energética en el contexto de Distritos de Energía Positiva, sin exponer datos brutos ni comprometer la confidencialidad.

# Dataset Energético Horario para Estaciones de Bombeo e Infraestructura Hídrica

*(Water Pumping Infrastructure Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos aplicados a la monitorización y optimización del consumo energético en **estaciones de bombeo de agua potable y residual**, así como en otras infraestructuras hídricas municipales.

El dataset permite analizar el comportamiento energético de los activos de bombeo de forma segura, habilitando algoritmos de detección de anomalías, predicción de mantenimiento y evaluación de eficiencia operativa, todo ello dentro de un entorno **Compute-to-Data** que protege la información crítica de la infraestructura.

---

## Alcance y Consideraciones Técnicas

Dada la naturaleza crítica de la infraestructura hídrica, el dataset está diseñado para **minimizar la exposición de datos sensibles** y cumplir con requisitos de seguridad operativa:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin devolución de información técnica detallada de la infraestructura

Este enfoque permite ejecutar análisis avanzados sin comprometer la seguridad ni la soberanía del dato.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de datos municipales

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

El acceso humano directo a los datos brutos no está permitido.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan estaciones de bombeo e infraestructuras hídricas.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin exponer información operativa sensible.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de estaciones de bombeo, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a una estación de bombeo o infraestructura hídrica, anonimizando la localización y el activo concreto.

* **timestamp**  
   Permite analizar patrones horarios, ciclos operativos y correlaciones temporales relevantes para la eficiencia energética y el mantenimiento.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por la estación de bombeo durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, autoconsumo en instalaciones con generación propia), si aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, cuando exista generación asociada.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Detección de anomalías energéticas**

* **Predicción de mantenimiento**

* **Análisis de eficiencia operativa**

* **Identificación de patrones de consumo anómalos**

* **Optimización de costes energéticos**

* **Prevención de fallos en el suministro**

Los algoritmos acceden únicamente a los datos energéticos necesarios.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas de gobernanza municipales

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este enfoque protege infraestructuras críticas y garantiza cumplimiento con normativas de seguridad y soberanía del dato.

---

## Resumen

El dataset de estaciones de bombeo e infraestructura hídrica proporciona una **vista horaria, segura y gobernada** del consumo energético de activos críticos de agua potable y residual. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de detección de anomalías y mantenimiento predictivo, optimizando costes energéticos y mejorando la resiliencia del servicio sin exponer información sensible de la infraestructura.

# Dataset Energético Horario para Sistemas de Contenedores de Residuos Subterráneos

*(Underground Waste Container Systems – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos aplicados a la gestión energéticamente eficiente de **sistemas de contenedores de residuos subterráneos**, integrando el consumo eléctrico asociado a mecanismos de compactación, elevación y sensorización.

El dataset permite analizar el consumo energético de estos sistemas de forma segura y agregada, apoyando la optimización operativa, la planificación de rutas de recogida y la reducción del consumo energético y de combustible, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato municipal.

---

## Alcance y Consideraciones Técnicas

Dado que los sistemas de residuos forman parte de infraestructuras urbanas críticas, el dataset está diseñado para **minimizar la exposición de información sensible**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos de localización exacta ni estado operativo detallado

Este enfoque permite ejecutar análisis energéticos y de eficiencia sin comprometer la seguridad del servicio.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de acceso granular definidas por el ayuntamiento

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios humanos no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan sistemas de contenedores de residuos subterráneos y sus mecanismos asociados.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común a todos los casos de uso del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de los sistemas de contenedores, los campos de generación y exportación serán nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado al sistema de contenedores subterráneos, anonimizando la ubicación y el activo específico.

* **timestamp**  
   Permite analizar patrones horarios de uso, activación de compactadores y correlación con operaciones de recogida.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por los sistemas de compactación, elevación y control durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (si existiera autoconsumo asociado), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Análisis de eficiencia energética**

* **Detección de patrones anómalos de consumo**

* **Optimización de la operación de compactación**

* **Apoyo a la planificación de rutas de recogida**

* **Reducción del consumo energético y de combustible**

* **Evaluación de sostenibilidad de los servicios urbanos**

Los algoritmos acceden únicamente a los campos energéticos necesarios.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados mediante políticas de acceso granular

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza la soberanía del dato municipal y el cumplimiento de requisitos de seguridad urbana.

---

## Resumen

El dataset de sistemas de contenedores de residuos subterráneos proporciona una **vista horaria, segura y gobernada** del consumo energético asociado a infraestructuras de recogida de residuos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización energética y eficiencia operativa, apoyando servicios municipales de limpieza más sostenibles sin exponer información sensible ni operativa.

# 

# Dataset Energético Horario para Edificios Culturales y Patrimonio

*(Cultural and Heritage Buildings – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **gestión energética inteligente de museos y edificios patrimoniales**, donde la eficiencia energética debe equilibrarse con estrictos requisitos de conservación.

El dataset permite analizar el consumo energético asociado a sistemas de climatización, iluminación y control ambiental, habilitando algoritmos de optimización que reducen el consumo sin comprometer las condiciones necesarias para la preservación de obras de arte y estructuras históricas, todo ello dentro de un entorno **Compute-to-Data** que protege información sensible.

---

## Alcance y Consideraciones Técnicas

Debido al carácter sensible de los edificios culturales, el dataset está diseñado para **minimizar riesgos de exposición** y preservar la seguridad patrimonial:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos ambientales detallados ni información de seguridad

Este enfoque permite optimizar el consumo energético manteniendo la confidencialidad.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de acceso granular definidas por los gestores culturales

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan museos, edificios históricos y equipamientos culturales.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la infraestructura.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común a todo el ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de edificios patrimoniales, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a un edificio cultural o patrimonial, anonimizando su identidad y ubicación específica.

* **timestamp**  
   Permite analizar patrones horarios de consumo vinculados a climatización, iluminación y operación del edificio.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por sistemas HVAC, iluminación y control ambiental durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (si existiera autoconsumo compatible con el entorno patrimonial), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Optimización energética basada en restricciones de conservación**

* **Análisis de eficiencia de sistemas HVAC**

* **Detección de consumos anómalos**

* **Predicción energética respetando rangos de conservación**

* **Soporte a decisiones de rehabilitación energética**

Cada algoritmo accede únicamente a los datos necesarios para su función.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos controlados mediante políticas de acceso granular

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño protege la seguridad del patrimonio cultural y cumple con requisitos de confidencialidad.

---

## Resumen

El dataset de edificios culturales y patrimoniales proporciona una **vista horaria, segura y gobernada** del consumo energético asociado a museos y edificios históricos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización energética que equilibran eficiencia y conservación, apoyando la sostenibilidad del patrimonio sin exponer información sensible ni comprometer su protección.

# Dataset Energético Horario para Instalaciones Educativas

*(Educational Facilities – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a impulsar la **sostenibilidad y la eficiencia energética en instalaciones educativas**, como escuelas, institutos y centros de formación.

El dataset permite monitorizar y analizar el consumo energético asociado a climatización, iluminación y operación general de los edificios educativos, facilitando la optimización de horarios de funcionamiento, la detección de derroches energéticos y el apoyo a decisiones de gestión energética, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato.

---

## Alcance y Consideraciones Técnicas

Para equilibrar eficiencia operativa, privacidad y reutilización educativa, el dataset está diseñado con los siguientes criterios:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Posibilidad de generar vistas **anonimizadas y agregadas** para fines educativos

Este enfoque permite tanto la optimización operativa como el uso pedagógico de los datos sin comprometer la privacidad.

---

## Tipo de Dataset

* **Dataset privado** para uso operativo y algorítmico

* **Vistas derivadas anonimizadas** potencialmente publicables como datos abiertos

* **No descargable** en su forma bruta

* **Accesible únicamente por algoritmos autorizados**

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios acceden solo a resultados derivados o datasets anonimizados.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan instalaciones educativas.

Cada registro representa el comportamiento energético de **un punto de suministro (CUPS) en una hora concreta**, sin incluir información personal ni sensible.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de instalaciones educativas, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a una instalación educativa, anonimizando la identidad del centro si es necesario.

* **timestamp**  
   Permite analizar patrones horarios vinculados a actividad lectiva, uso de instalaciones y periodos no lectivos.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por climatización, iluminación y equipamiento educativo durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, instalaciones fotovoltaicas educativas), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Optimización de horarios de funcionamiento**

* **Detección de consumos ineficientes o anómalos**

* **Análisis comparativo entre centros educativos**

* **Seguimiento de objetivos de sostenibilidad**

* **Generación de datasets educativos anonimizados**

* **Apoyo a proyectos formativos en eficiencia energética y STEM**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset bruto

* Accesos regulados mediante políticas de gobernanza

* Posibilidad de publicar **datasets derivados y anonimizados**

* Ejecuciones y usos auditables

Este enfoque protege la privacidad institucional y habilita la reutilización educativa responsable.

---

## Resumen

El dataset de instalaciones educativas proporciona una **vista horaria, segura y gobernada** del consumo energético en escuelas y centros de formación. Diseñado como un servicio de datos privado para Compute-to-Data, permite optimizar la eficiencia energética, detectar derroches y apoyar la toma de decisiones operativas, al tiempo que habilita la creación de datasets anonimizados para proyectos educativos reales, fomentando la conciencia ambiental y el aprendizaje STEM sin comprometer la confidencialidad.

# Dataset Energético Horario para Alumbrado Público y Puntos de Luz

*(Public Lighting and Streetlights – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **gestión inteligente y eficiente del alumbrado público**, permitiendo transformar redes de iluminación urbana en sistemas adaptativos, seguros y energéticamente optimizados.

El dataset permite analizar el consumo energético asociado a puntos de luz y cuadros de alumbrado, habilitando estrategias de atenuación dinámica, detección temprana de fallos y mantenimiento predictivo, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato municipal.

---

## Alcance y Consideraciones Técnicas

Dado el carácter crítico del alumbrado público para la seguridad ciudadana, el dataset está diseñado para **minimizar riesgos operativos y de seguridad**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos de localización precisa ni estado individual de luminarias

Este enfoque permite optimizar el servicio sin comprometer la seguridad ni la continuidad operativa.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas municipales de acceso y operación

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan redes de alumbrado público y conjuntos de luminarias urbanas.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la infraestructura.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En redes de alumbrado, los campos de generación y exportación suelen ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a una red o cuadro de alumbrado público, anonimizando la ubicación exacta y el activo concreto.

* **timestamp**  
   Permite analizar patrones horarios de encendido, atenuación y consumo vinculados a la actividad urbana.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por las luminarias y sistemas de control durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (si existieran sistemas de autoconsumo asociados), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Optimización dinámica de la iluminación**

* **Detección de consumos anómalos**

* **Mantenimiento predictivo de luminarias**

* **Planificación de rutas de reparación**

* **Reducción de costes operativos y huella de carbono**

* **Mejora de la seguridad ciudadana**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas municipales

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza la soberanía del dato urbano y la protección de infraestructuras críticas.

---

## Resumen

El dataset de alumbrado público y puntos de luz proporciona una **vista horaria, segura y gobernada** del consumo energético de redes de iluminación urbana. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización, mantenimiento predictivo y gestión eficiente del alumbrado, reduciendo costes y emisiones mientras se mejora la calidad del servicio y la seguridad ciudadana.

# Dataset Energético Horario para Instalaciones Deportivas

*(Sports Facilities – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **gestión energética de alto rendimiento en instalaciones deportivas**, caracterizadas por demandas intensivas y altamente variables.

El dataset permite analizar el consumo energético asociado a iluminación de alta potencia, climatización de grandes espacios, piscinas climatizadas y equipamiento deportivo especializado, habilitando algoritmos de optimización operativa, gestión de picos de carga y coordinación con generación renovable local, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato.

---

## Alcance y Consideraciones Técnicas

Dada la variabilidad de uso y la intensidad energética de estas instalaciones, el dataset está diseñado para ofrecer análisis precisos sin exponer información sensible:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos de ocupación, eventos o seguridad

Este enfoque permite optimizar el consumo manteniendo la calidad del servicio deportivo.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de gestión energética municipales o del operador

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan instalaciones deportivas como gimnasios, polideportivos, piscinas y campos deportivos.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información operativa sensible.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En muchas instalaciones deportivas, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a una instalación deportiva, anonimizando la identidad y localización del activo.

* **timestamp**  
   Permite analizar patrones horarios de consumo vinculados a entrenamientos, eventos deportivos y uso intensivo de instalaciones.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por iluminación, climatización, piscinas y equipamiento deportivo durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, fotovoltaica en cubiertas deportivas), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Optimización de operación según horarios y demanda**

* **Gestión y suavizado de picos de carga eléctrica**

* **Optimización del uso de energía renovable local**

* **Detección de consumos anómalos**

* **Análisis de eficiencia energética por tipo de instalación**

* **Soporte a decisiones de inversión y mejora operativa**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas de gobernanza

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza la protección de información operativa y el cumplimiento de principios de soberanía del dato.

---

## Resumen

El dataset de instalaciones deportivas proporciona una **vista horaria, segura y gobernada** del consumo energético de gimnasios, polideportivos y campos deportivos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización energética, gestión de picos y coordinación con renovables, reduciendo costes operativos y emisiones sin comprometer la calidad del servicio deportivo.

# Dataset Energético Horario para Edificios de Uso Mixto

*(Mixed-Use Buildings – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la gestión energética de **edificios de uso mixto** que combinan viviendas, oficinas, comercios y servicios en una misma estructura.

El dataset permite analizar perfiles energéticos complejos con múltiples patrones de consumo y horarios, habilitando algoritmos para autoconsumo compartido, reparto de costes, optimización del uso de energía renovable y gestión de almacenamiento comunitario, todo ello dentro de un entorno **Compute-to-Data** que garantiza soberanía del dato y transparencia.

---

## Alcance y Consideraciones Técnicas

Dada la heterogeneidad de usos y la sensibilidad de los datos residenciales y comerciales, el dataset está diseñado para **minimizar la exposición de información individual**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de información residencial, comercial o de ocupación

Este enfoque permite gestionar la complejidad energética sin comprometer la privacidad.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo reglas de comunidades energéticas locales

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan edificios de uso mixto y sus diferentes unidades funcionales.

Cada registro representa el comportamiento energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre los usuarios finales.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

Los campos de generación y exportación pueden variar según el edificio y la existencia de autoconsumo compartido.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a una unidad o subsistema del edificio de uso mixto, anonimizando la identidad de viviendas, oficinas o comercios.

* **timestamp**  
   Permite analizar patrones horarios diferenciados y solapados de consumo residencial, comercial y de servicios.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por la unidad durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (principalmente fotovoltaica comunitaria), cuando aplica.

* **energy\_exported\_kwh**  
   Energía excedentaria exportada a red, relevante para el reparto de autoconsumo y balances comunitarios.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Análisis integrado de perfiles energéticos mixtos**

* **Optimización del autoconsumo compartido**

* **Reparto justo y transparente de costes energéticos**

* **Gestión de almacenamiento comunitario**

* **Detección de desequilibrios entre usos**

* **Soporte a comunidades energéticas locales**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas de comunidades energéticas

* Ejecuciones auditables

* Resultados siempre agregados o derivados

* Uso de registros verificables para reparto y trazabilidad

Este diseño permite transparencia y confianza sin comprometer la privacidad.

---

## Resumen

El dataset de edificios de uso mixto proporciona una **vista horaria, segura y gobernada** del consumo, la generación y los excedentes energéticos en estructuras con múltiples usos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de autoconsumo compartido, reparto justo de costes y optimización energética comunitaria, habilitando comunidades energéticas locales eficientes y auditables sin exponer información sensible.

# Dataset Energético Horario para Edificios de Oficinas y Espacios Administrativos

*(Office and Administrative Buildings – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **gestión eficiente de la energía en edificios de oficinas y espacios administrativos**, como ayuntamientos, sedes municipales y centros administrativos públicos.

El dataset permite monitorizar y analizar el consumo energético asociado a climatización, iluminación y equipamiento informático, habilitando algoritmos de detección de ineficiencias, análisis comparativo y seguimiento de objetivos de sostenibilidad, todo ello dentro de un entorno **Compute-to-Data** que garantiza soberanía del dato y control institucional.

---

## Alcance y Consideraciones Técnicas

Dado el carácter institucional de estos edificios y la necesidad de transparencia y control, el dataset está diseñado para ofrecer análisis útiles sin exponer información sensible:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de información operativa interna o de seguridad

Este enfoque permite una gestión energética basada en datos, compatible con requisitos de gobernanza pública.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de datos de la administración pública

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos; solo a resultados derivados.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan edificios administrativos y de oficinas públicas.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la operación interna del edificio.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En muchos edificios administrativos, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a un edificio administrativo u oficina pública, anonimizando la identidad del activo concreto si es necesario.

* **timestamp**  
   Permite analizar patrones horarios vinculados a horarios laborales, uso de equipamiento y periodos de inactividad.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por sistemas de climatización, iluminación y equipamiento informático durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, fotovoltaica en edificios públicos), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Detección de ineficiencias energéticas**

* **Análisis de patrones anómalos mediante IA**

* **Optimización de horarios de funcionamiento**

* **Seguimiento de objetivos de sostenibilidad**

* **Análisis comparativo entre edificios administrativos**

* **Soporte a dashboards de gestión energética pública**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas institucionales

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza control público, trazabilidad y cumplimiento de principios de buena gobernanza.

---

## Resumen

El dataset de edificios de oficinas y espacios administrativos proporciona una **vista horaria, segura y gobernada** del consumo energético en sedes públicas y centros administrativos. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización, detección de ineficiencias y seguimiento de sostenibilidad, reduciendo costes operativos y reforzando el papel ejemplar de la administración pública en responsabilidad ambiental.

# Dataset Energético Horario para Instalaciones de Piscinas

*(Swimming Pool Facilities – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **optimización energética de instalaciones de piscinas cubiertas y al aire libre**, que se encuentran entre los mayores consumidores energéticos municipales.

El dataset permite analizar el consumo energético asociado a calefacción del agua, climatización del recinto, deshumidificación, filtrado y sistemas auxiliares, habilitando algoritmos de optimización de ciclos térmicos, gestión de horarios y coordinación con fuentes renovables, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato.

---

## Alcance y Consideraciones Técnicas

Dada la criticidad sanitaria y operativa de estas instalaciones, el dataset está diseñado para **maximizar eficiencia sin comprometer seguridad ni calidad del servicio**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos sanitarios, de ocupación o de control operativo fino

Este enfoque permite optimizar el consumo manteniendo las condiciones reglamentarias de uso.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas municipales de gestión energética y sanitaria

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan instalaciones de piscinas municipales, tanto cubiertas como al aire libre.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la operación interna.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

Los campos de generación y exportación pueden ser nulos si no existe autoconsumo asociado.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a la instalación de piscina, anonimizando la identidad y localización específica del activo.

* **timestamp**  
   Permite analizar patrones horarios vinculados a calentamiento del agua, funcionamiento de sistemas de filtrado y uso de las instalaciones.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por sistemas térmicos, bombas, filtrado, climatización y deshumidificación durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, solar térmica o fotovoltaica asociada), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local excedentaria.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Optimización de ciclos de calentamiento del agua**

* **Programación eficiente de filtrado**

* **Gestión energética térmica integrada**

* **Reducción de picos de demanda eléctrica**

* **Coordinación con energía renovable local**

* **Análisis de eficiencia energética de instalaciones acuáticas**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas municipales

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza la confidencialidad operativa y el cumplimiento de requisitos sanitarios y energéticos.

---

## Resumen

El dataset de instalaciones de piscinas proporciona una **vista horaria, segura y gobernada** del consumo energético asociado a piscinas cubiertas y al aire libre. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de optimización térmica, programación eficiente y coordinación con renovables, logrando ahorros energéticos significativos sin comprometer la calidad del servicio ni la seguridad sanitaria.

# Dataset Energético Horario para Edificios de Servicios Sanitarios y de Salud

*(Healthcare and Health Services Buildings – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a garantizar la **fiabilidad y eficiencia energética en infraestructuras sanitarias críticas**, como centros de salud, ambulatorios y servicios de emergencia, que requieren suministro eléctrico continuo 24/7.

El dataset permite analizar el consumo energético asociado a equipamiento médico sensible, climatización precisa y sistemas de respaldo energético, habilitando algoritmos de auditoría operativa, optimización de cargas base y mantenimiento preventivo, todo ello dentro de un entorno **Compute-to-Data** que preserva la privacidad y la soberanía del dato sanitario.

---

## Alcance y Consideraciones Técnicas

Dada la criticidad asistencial y los requisitos regulatorios del sector salud, el dataset está diseñado para **maximizar la fiabilidad operativa sin exponer información sensible**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos clínicos, operativos internos o de seguridad

Este enfoque permite mejorar la eficiencia energética sin comprometer la continuidad del servicio.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas de datos del ámbito sanitario

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos; solo a resultados derivados.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan edificios y servicios sanitarios.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la operación del centro.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de edificios sanitarios, los campos de generación y exportación pueden ser nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a un edificio o instalación sanitaria, anonimizando la identidad y localización del activo crítico.

* **timestamp**  
   Permite analizar patrones horarios de consumo continuo, cargas base y variaciones relevantes para la fiabilidad del suministro.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por equipamiento médico, climatización, sistemas críticos y servicios auxiliares durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (por ejemplo, sistemas de respaldo o autoconsumo), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local excedentaria.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Auditoría energética de infraestructuras críticas**

* **Optimización de cargas base continuas**

* **Detección de consumos anómalos**

* **Soporte a mantenimiento preventivo de SAIs y generadores**

* **Mejora de la eficiencia energética sin riesgo asistencial**

* **Seguimiento de resiliencia energética sanitaria**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas específicas del sector sanitario

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza cumplimiento con requisitos de privacidad, seguridad y continuidad asistencial.

---

## Resumen

El dataset de edificios de servicios sanitarios y de salud proporciona una **vista horaria, segura y gobernada** del consumo energético en infraestructuras sanitarias críticas. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de auditoría, optimización y mantenimiento preventivo que mejoran la eficiencia energética y la resiliencia del suministro eléctrico, sin comprometer la privacidad de los datos sanitarios ni la continuidad del servicio.

# Dataset Energético Horario para Semáforos y Sistemas de Señalización

*(Traffic Lights and Signalling Systems – Hourly Energy Dataset)*

## Propósito del Dataset

Este dataset actúa como **servicio de datos base** para los algoritmos orientados a la **gestión energética eficiente de semáforos y sistemas de señalización vial**, infraestructuras urbanas que operan de forma continua y resultan críticas para la movilidad y la seguridad ciudadana.

El dataset permite analizar el consumo energético constante asociado a semáforos, señalización dinámica y sistemas de control, habilitando algoritmos para evaluar oportunidades de modernización tecnológica (por ejemplo, migración a LED), análisis de retorno de inversión y optimización operativa, todo ello dentro de un entorno **Compute-to-Data** que preserva la soberanía del dato municipal.

---

## Alcance y Consideraciones Técnicas

Dado el carácter continuo y crítico de estos sistemas para la circulación urbana, el dataset está diseñado para **permitir análisis energéticos sin comprometer la seguridad vial**:

* Datos **filtrados por un periodo temporal concreto** (día, semana o mes)

* Resolución **horaria**

* Inclusión **exclusiva de los campos energéticos necesarios**

* Sin exposición directa de datos de control de tráfico ni configuraciones operativas

Este enfoque permite identificar mejoras de eficiencia manteniendo la fiabilidad del servicio.

---

## Tipo de Dataset

* **Dataset privado**

* **No descargable**

* **Accesible únicamente por algoritmos autorizados**

* Gobernado bajo políticas municipales de movilidad y energía

* Ejecutado mediante **Compute-to-Data sobre Empower-X**

Los usuarios no acceden directamente a los datos brutos.

---

## Contenido del Dataset

El dataset contiene **datos energéticos por hora** asociados a puntos de suministro eléctricos que alimentan redes de semáforos y sistemas de señalización vial.

Cada registro representa el consumo energético de **un punto de suministro (CUPS) en una hora concreta**, sin revelar información sensible sobre la operación del sistema.

---

## Formato del Dataset

El dataset sigue un **formato tabular fijo**, común al resto de datasets del ecosistema.

### Estructura del Dataset

| Campo | Descripción |
| ----- | ----- |
| `cups_id` | Identificador del punto de suministro (anonimizado si aplica) |
| `timestamp` | Fecha y hora del registro (resolución horaria) |
| `energy_consumed_kwh` | Energía consumida en esa hora (kWh) |
| `energy_generated_kwh` | Energía generada en esa hora (kWh, si existe) |
| `energy_exported_kwh` | Energía exportada a red en esa hora (kWh, si existe) |

En la mayoría de sistemas de señalización, los campos de generación y exportación serán nulos.

---

## Qué Representa Cada Campo

* **cups\_id**  
   Identificador del punto de suministro asociado a semáforos o sistemas de señalización, anonimizando la ubicación exacta y el activo específico.

* **timestamp**  
   Permite analizar patrones de consumo continuo, identificar cargas base y evaluar el impacto energético de mejoras tecnológicas.

* **energy\_consumed\_kwh**  
   Energía eléctrica consumida por semáforos, controladores y sistemas de señalización durante la hora indicada.

* **energy\_generated\_kwh**  
   Energía generada localmente (si existieran soluciones de autoconsumo asociadas), cuando aplica.

* **energy\_exported\_kwh**  
   Energía exportada a red, en caso de existir generación local.

---

## Relación con los Algoritmos

Este dataset alimenta algoritmos orientados a:

* **Análisis de consumo continuo y cargas base**

* **Evaluación de actualización tecnológica (LED, control inteligente)**

* **Cálculo de retorno de inversión (ROI)**

* **Detección de consumos anómalos**

* **Soporte a planificación de movilidad urbana sostenible**

* **Coordinación energética con otros sistemas urbanos**

Los algoritmos acceden únicamente a los campos necesarios para cada análisis.

---

## Seguridad, Gobernanza y Auditoría

* Los datos **no abandonan el entorno seguro**

* No se permite descarga del dataset

* Accesos regulados por políticas municipales

* Ejecuciones auditables

* Resultados siempre agregados o derivados

Este diseño garantiza la soberanía del dato urbano y la protección de infraestructuras críticas de movilidad.

---

## Resumen

El dataset de semáforos y sistemas de señalización proporciona una **vista horaria, segura y gobernada** del consumo energético de infraestructuras clave para la movilidad urbana. Diseñado como un servicio de datos privado para Compute-to-Data, permite ejecutar algoritmos de eficiencia energética, evaluación de inversiones y optimización operativa, apoyando estrategias de smart city y reducción de emisiones sin comprometer la seguridad vial.

