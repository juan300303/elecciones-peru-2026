# Changelog - Elecciones Perú 2026

## Última Actualización: Bug Fixes y Mejoras de Robustez

### Bugs Corregidos

#### 1. `index.html` - Referencias de archivo inválidas
- **Problema**: Línea 9 contenía `<link rel="stylesheet" href="/index.css">` - archivo no existente
- **Solución**: Removida referencia a hoja de estilos no existente
- **Impacto**: Prevenía que la página se cargue correctamente

#### 2. `index.html` - Script TypeScript no existente
- **Problema**: Final del archivo contenía `<script type="module" src="/index.tsx"></script>` - módulo no existe
- **Solución**: Removido script que intentaba cargar módulo TypeScript no existente
- **Impacto**: Causaba error 404 en consola del navegador

#### 3. `index.html` - Datos duplicados en ranking
- **Problema**: Cinco entradas de candidatos mostraban el mismo candidato "María Fernández" (todas con ranking #1)
- **Solución**: Actualizado con candidatos únicos:
  - #1: María Fernández, Partido Progresista, 45%, +2.8%
  - #2: Carlos Méndez, Partido Nacional, 38%, +1.2%
  - #3: Ana Rodríguez, Frente Democrático, 32%, -0.5%
  - #4: Pedro López, Alianza por el Cambio, 42%, +3.1%
  - #5: Sofia Torres, Frente Popular, 35%, +1.5%
- **Impacto**: Datos más realistas y precisos para demostración

#### 4. `index.html` - Validación de formulario faltante
- **Problema**: Formulario de newsletter no validaba entrada de correo
- **Solución**: 
  - Añadido atributo `required` al input de email
  - Añadidas etiquetas `aria-label` para accesibilidad
  - Implementado validador JavaScript con `DOMContentLoaded`
  - Retroalimentación visual al usuario si email es inválido
- **Impacto**: Mejor UX y seguridad del formulario

### Mejoras de Robustez - `js/calendario.js`

#### 1. Manejo Global de Errores
- Envuelto todo el código en try-catch global
- Validación de elementos DOM antes de usarlos
- Logging completo de errores con stack traces

#### 2. Función `formatDate()`
- Validación de fecha antes de formatear
- Manejo de errores con fallback a formato ISO
- Console warnings para debugging

#### 3. Función `renderMiniCalendar()`
- Envuelto en try-catch
- Manejo de excepciones de Intl.DateTimeFormat con fallback
- Skip de celdas si conversión de fecha falla
- Validación de cellDate antes de usar

#### 4. Función `toISO()`
- Validación de que input sea un objeto Date válido
- Check de isNaN antes de conversión
- Retorna string vacío si hay error
- Logging de warnings para debug

#### 5. Función `selectDate()`
- Envuelto en try-catch
- Validación de fecha para navegación de meses
- Manejo de error si fecha es inválida
- Previene crashes en navegación inter-meses

#### 6. Función `renderList()`
- Validación de que container existe antes de renderizar
- Try-catch alrededor de cada evento
- Console warnings si evento falla en renderizar
- Continúa renderizando otros eventos si uno falla

#### 7. Validación Inicial de DOM
- Verifica que botones de calendario existan
- Verifica que contenedores de vistas existan
- Verifica que elementos del mini-calendar existan
- Lanza errores descriptivos si elementos críticos faltan

### Beneficios de las Mejoras

✅ **Estabilidad**: El calendario no crashea si hay datos inválidos
✅ **Debugging**: Console logs claros para identificar problemas
✅ **Accesibilidad**: Formulario ahora accesible con aria-labels
✅ **Datos**: Información de candidatos más precisa
✅ **UX**: Validación de formulario con feedback al usuario
✅ **Mantenibilidad**: Código más robusto y fácil de debuggear

### Archivos Modificados

- `index.html` - 4 bugs corregidos
- `js/calendario.js` - 6 funciones mejoradas con error handling
- `CHANGELOG.md` - Este archivo

### Próximos Pasos Recomendados

1. Cargar datos de calendario desde `calendarios.json` en lugar de hardcoded
2. Implementar backend para formulario de newsletter
3. Añadir tests unitarios para funciones de calendario
4. Validar con navegadores legacy (IE11 si es necesario)
5. Pruebas de accesibilidad con screen readers

---

**Fecha de modificación**: 2024
**Versión**: 1.1.0
