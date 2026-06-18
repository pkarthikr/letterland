/* @ds-bundle: {"format":3,"namespace":"LetterLandDesignSystem_3d51bd","components":[{"name":"Alert","sourcePath":"components/display/Alert.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Alert.jsx":"9aaebfa87a53","components/display/Avatar.jsx":"4935d6bc4669","components/display/Badge.jsx":"6584c85143e0","components/display/Card.jsx":"298583ed993c","components/forms/Button.jsx":"592ae885158c","components/forms/Checkbox.jsx":"aecd15491113","components/forms/IconButton.jsx":"d1352b972811","components/forms/Input.jsx":"16e2255fc98b","components/forms/Radio.jsx":"d63d673cb7dd","components/forms/Select.jsx":"b7d730b9fe8e","components/forms/Switch.jsx":"c9cb7772553d","components/navigation/Accordion.jsx":"b7e1b3a6237e","components/navigation/Tabs.jsx":"8c13ef9f95a4","ui_kits/course/CourseHero.jsx":"3f6154119487","ui_kits/course/Curriculum.jsx":"146c827820d8","ui_kits/course/Enroll.jsx":"63b629bee6a6","ui_kits/course/FAQ.jsx":"2b0aca45be57","ui_kits/course/Included.jsx":"29e80fa4d817","ui_kits/website/Approach.jsx":"ca02f0c4bf00","ui_kits/website/Footer.jsx":"64b8c627d1fd","ui_kits/website/Hero.jsx":"0db2dcacd947","ui_kits/website/Nav.jsx":"e71db402b4df","ui_kits/website/Resources.jsx":"fe00d51deda7","ui_kits/website/Testimonials.jsx":"2b780910232c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LetterLandDesignSystem_3d51bd = window.LetterLandDesignSystem_3d51bd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Alert
 * Inline message banner for info, success, warning, danger.
 */
function Alert({
  children,
  title,
  tone = 'info',
  // info | success | warning | danger | sage
  icon,
  // optional custom icon node
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--info-soft)',
      accent: 'var(--info)',
      text: 'var(--info-text)'
    },
    success: {
      bg: 'var(--success-soft)',
      accent: 'var(--success)',
      text: 'var(--success-text)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      accent: 'var(--warning)',
      text: 'var(--warning-text)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      accent: 'var(--danger)',
      text: 'var(--danger-text)'
    },
    sage: {
      bg: 'var(--sage-100)',
      accent: 'var(--sage-600)',
      text: 'var(--sage-700)'
    }
  };
  const t = tones[tone] || tones.info;
  const defaultIcons = {
    info: 'M12 16v-4M12 8h.01',
    success: 'M20 6 9 17l-5-5',
    warning: 'M12 9v4M12 17h.01',
    danger: 'M18 6 6 18M6 6l12 12',
    sage: 'M12 16v-4M12 8h.01'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: t.bg,
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: t.accent
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, tone !== 'success' && tone !== 'danger' && /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: defaultIcons[tone] || defaultIcons.info
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: t.text,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flex: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: t.text,
      opacity: 0.6,
      padding: 2,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Alert.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Avatar
 * Image or initials avatar with warm fallback colors.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  // sm | md | lg | xl
  shape = 'circle',
  // circle | rounded
  tone,
  // optional override: clay | sage | ink
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 52,
    xl: 72
  };
  const fonts = {
    sm: 13,
    md: 15,
    lg: 19,
    xl: 26
  };
  const dim = dims[size] || dims.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  const tones = {
    clay: {
      bg: 'var(--clay-200)',
      color: 'var(--clay-800)'
    },
    sage: {
      bg: 'var(--sage-200)',
      color: 'var(--sage-800)'
    },
    ink: {
      bg: 'var(--ink-200)',
      color: 'var(--ink-800)'
    }
  };
  const palette = [tones.clay, tones.sage, tones.ink];
  const picked = tone ? tones[tone] : palette[(name.charCodeAt(0) || 0) % palette.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-md)',
      background: picked.bg,
      color: picked.color,
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: fonts[size] || fonts.md,
      boxShadow: 'inset 0 0 0 1.5px rgba(74,66,59,0.06)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Badge
 * Small status / category pill.
 */
function Badge({
  children,
  tone = 'neutral',
  // neutral | clay | sage | success | warning | danger | info
  variant = 'soft',
  // soft | solid | outline
  size = 'md',
  // sm | md
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: 'var(--ink-100)',
      solid: 'var(--ink-600)',
      text: 'var(--text-muted)',
      solidText: 'var(--white)',
      dot: 'var(--ink-500)'
    },
    clay: {
      soft: 'var(--clay-100)',
      solid: 'var(--clay-500)',
      text: 'var(--clay-700)',
      solidText: 'var(--white)',
      dot: 'var(--clay-500)'
    },
    sage: {
      soft: 'var(--sage-100)',
      solid: 'var(--sage-500)',
      text: 'var(--sage-700)',
      solidText: 'var(--white)',
      dot: 'var(--sage-600)'
    },
    success: {
      soft: 'var(--success-soft)',
      solid: 'var(--success)',
      text: 'var(--success-text)',
      solidText: 'var(--white)',
      dot: 'var(--success)'
    },
    warning: {
      soft: 'var(--warning-soft)',
      solid: 'var(--warning)',
      text: 'var(--warning-text)',
      solidText: 'var(--white)',
      dot: 'var(--warning)'
    },
    danger: {
      soft: 'var(--danger-soft)',
      solid: 'var(--danger)',
      text: 'var(--danger-text)',
      solidText: 'var(--white)',
      dot: 'var(--danger)'
    },
    info: {
      soft: 'var(--info-soft)',
      solid: 'var(--info)',
      text: 'var(--info-text)',
      solidText: 'var(--white)',
      dot: 'var(--info)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === 'sm';
  let bg = 'transparent',
    color = t.text,
    border = 'transparent';
  if (variant === 'soft') {
    bg = t.soft;
    color = t.text;
  } else if (variant === 'solid') {
    bg = t.solid;
    color = t.solidText;
  } else if (variant === 'outline') {
    bg = 'transparent';
    color = t.text;
    border = 'currentColor';
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dot ? 6 : 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sm ? 11 : 12.5,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: sm ? '4px 9px' : '5px 12px',
      color,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Card
 * Soft, rounded surface container. Optional hover lift for clickable cards.
 */
function Card({
  children,
  variant = 'elevated',
  // elevated | outlined | soft
  padding = 'md',
  // none | sm | md | lg
  interactive = false,
  as = 'div',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-7)'
  };
  const variants = {
    elevated: {
      bg: 'var(--surface-card)',
      border: 'transparent',
      shadow: 'var(--shadow-sm)',
      shadowHover: 'var(--shadow-lg)'
    },
    outlined: {
      bg: 'var(--surface-card)',
      border: 'var(--border-subtle)',
      shadow: 'none',
      shadowHover: 'var(--shadow-md)'
    },
    soft: {
      bg: 'var(--surface-sage-soft)',
      border: 'transparent',
      shadow: 'none',
      shadowHover: 'var(--shadow-sm)'
    }
  };
  const v = variants[variant] || variants.elevated;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: interactive && hover ? v.shadowHover : v.shadow,
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Button
 * Primary interactive control. Rounded, warm, confident.
 */
function Button({
  children,
  variant = 'primary',
  // primary | secondary | soft | ghost | danger
  size = 'md',
  // sm | md | lg
  pill = true,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: '13px',
      gap: '6px',
      icon: 15
    },
    md: {
      padding: '11px 20px',
      fontSize: '15px',
      gap: '8px',
      icon: 18
    },
    lg: {
      padding: '15px 28px',
      fontSize: '17px',
      gap: '10px',
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--accent)',
      bgHover: 'var(--accent-hover)',
      bgActive: 'var(--accent-active)',
      color: 'var(--text-on-accent)',
      border: 'transparent',
      shadow: 'var(--shadow-sm)',
      shadowHover: 'var(--shadow-md)'
    },
    secondary: {
      bg: 'var(--surface-card)',
      bgHover: 'var(--ink-50)',
      bgActive: 'var(--ink-100)',
      color: 'var(--text-strong)',
      border: 'var(--border-default)',
      shadow: 'var(--shadow-xs)',
      shadowHover: 'var(--shadow-sm)'
    },
    soft: {
      bg: 'var(--accent-soft)',
      bgHover: 'var(--accent-soft-hover)',
      bgActive: 'var(--clay-300)',
      color: 'var(--accent-on-soft)',
      border: 'transparent',
      shadow: 'none',
      shadowHover: 'none'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--accent-soft)',
      bgActive: 'var(--accent-soft-hover)',
      color: 'var(--accent-on-soft)',
      border: 'transparent',
      shadow: 'none',
      shadowHover: 'none'
    },
    danger: {
      bg: 'var(--danger)',
      bgHover: 'var(--red-700)',
      bgActive: 'var(--red-700)',
      color: 'var(--white)',
      border: 'transparent',
      shadow: 'var(--shadow-sm)',
      shadowHover: 'var(--shadow-md)'
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: p.color,
      background: disabled ? 'var(--ink-200)' : active ? p.bgActive : hover ? p.bgHover : p.bg,
      border: `1.5px solid ${disabled ? 'transparent' : p.border}`,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: disabled ? 'none' : hover ? p.shadowHover : p.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.65 : 1,
      transform: active && !disabled ? 'translateY(1px) scale(0.99)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Checkbox
 * Controlled or uncontrolled checkbox with label.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  description,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: description ? 1 : 0,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: on ? 'var(--accent)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--white)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — IconButton
 * Square/round button holding a single icon node. Pass an icon as children.
 */
function IconButton({
  children,
  label,
  // accessible label (required for a11y)
  variant = 'ghost',
  // ghost | soft | secondary | primary
  size = 'md',
  // sm | md | lg
  round = true,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--accent)',
      bgHover: 'var(--accent-hover)',
      color: 'var(--text-on-accent)',
      border: 'transparent'
    },
    secondary: {
      bg: 'var(--surface-card)',
      bgHover: 'var(--ink-50)',
      color: 'var(--text-strong)',
      border: 'var(--border-default)'
    },
    soft: {
      bg: 'var(--accent-soft)',
      bgHover: 'var(--accent-soft-hover)',
      color: 'var(--accent-on-soft)',
      border: 'transparent'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      color: p.color,
      background: hover && !disabled ? p.bgHover : p.bg,
      border: `1.5px solid ${p.border}`,
      borderRadius: round ? 'var(--radius-full)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Input
 * Text field with optional label, helper, error, and adornments.
 */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  helper,
  error,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  fullWidth = true,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || `ll-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      padding: '11px 0'
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, trailingIcon)), (helper || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 2px 0',
      fontSize: 12.5,
      fontFamily: 'var(--font-body)',
      color: error ? 'var(--danger-text)' : 'var(--text-subtle)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Radio
 * Single radio control; group several with the same `name`.
 */
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-rd-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const pick = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: pick,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: description ? 1 : 0,
      borderRadius: 'var(--radius-full)',
      border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 'var(--radius-full)',
      background: 'var(--accent)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--duration-normal) var(--ease-soft)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Select
 * Styled native select with label, helper, and error.
 */
function Select({
  label,
  options = [],
  // [{value, label}] or ["a","b"]
  value,
  defaultValue,
  placeholder,
  helper,
  error,
  disabled = false,
  fullWidth = true,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || `ll-sel-${Math.random().toString(36).slice(2, 8)}`;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 40px 11px 14px',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-subtle)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (helper || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 2px 0',
      fontSize: 12.5,
      fontFamily: 'var(--font-body)',
      color: error ? 'var(--danger-text)' : 'var(--text-subtle)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Letter Land — Switch
 * On/off toggle with optional label.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  size = 'md',
  // sm | md
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? {
    w: 38,
    h: 22,
    knob: 16,
    pad: 3
  } : {
    w: 46,
    h: 27,
    knob: 21,
    pad: 3
  };
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      flex: 'none',
      width: dims.w,
      height: dims.h,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--accent)' : 'var(--ink-300)',
      transition: 'background var(--duration-normal) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: dims.pad,
      left: on ? dims.w - dims.knob - dims.pad : dims.pad,
      width: dims.knob,
      height: dims.knob,
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-normal) var(--ease-soft)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Accordion
 * Collapsible list of items. `multiple` allows several open at once.
 */
function Accordion({
  items = [],
  // [{ id, title, content }]
  multiple = false,
  defaultOpen = [],
  // array of ids
  style = {},
  ...rest
}) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '16px 18px',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: 'none',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform var(--duration-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 18px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Letter Land — Tabs
 * Controlled or uncontrolled tab switcher. Renders content for active tab.
 */
function Tabs({
  tabs = [],
  // [{ id, label, content }]
  value,
  defaultValue,
  variant = 'underline',
  // underline | pill
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  const activeTab = tabs.find(t => t.id === active);
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: pill ? 4 : 4,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      borderBottom: pill ? 'none' : '1.5px solid var(--border-subtle)'
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5,
        padding: pill ? '8px 18px' : '10px 14px',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        color: on ? pill ? 'var(--text-strong)' : 'var(--accent-on-soft)' : 'var(--text-muted)',
        background: pill ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        borderBottom: pill ? 'none' : `2.5px solid ${on ? 'var(--accent)' : 'transparent'}`,
        marginBottom: pill ? 0 : '-1.5px',
        transition: 'color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)'
      }
    }, t.label);
  })), activeTab && activeTab.content !== undefined && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      paddingTop: 'var(--space-5)'
    }
  }, activeTab.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course/CourseHero.jsx
try { (() => {
function CourseHero() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 70
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "Letter Land",
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#enroll"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Enroll now"))), /*#__PURE__*/React.createElement("div", {
    className: "ll-container ll-chero",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "clay",
    variant: "solid"
  }, "6-week course"), /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, "Ages 4\u20136")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
      margin: '0 0 16px',
      lineHeight: 1.06
    }
  }, "Phonics, step by step."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      maxWidth: '44ch',
      margin: '0 0 24px'
    }
  }, "A calm, guided path from first sounds to first words \u2014 ten joyful minutes a day, designed for real family life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#enroll"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Start the course")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Ana', 'Ben', 'Cara'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0,
      border: '2px solid var(--surface-card)',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "2,400+ enrolled")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "none",
    style: {
      width: '100%',
      maxWidth: 420,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--clay-100)',
      padding: '32px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustration-tiles.svg",
    alt: "",
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--text-strong)'
    }
  }, "$49"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-subtle)',
      textDecoration: 'line-through'
    }
  }, "$79"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Launch price"))), ['Lifetime access', '6 weeks of activities', 'Printable companion pack', '30-day money-back guarantee'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 0',
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 18,
      height: 18,
      color: 'var(--success)'
    }
  }), t)), /*#__PURE__*/React.createElement("a", {
    href: "#enroll",
    style: {
      display: 'block',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg"
  }, "Enroll now")))))));
}
window.CourseHero = CourseHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course/CourseHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course/Curriculum.jsx
try { (() => {
function Curriculum() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const weeks = [{
    id: 'w1',
    title: 'Week 1 · Listening for sounds',
    content: 'Tune little ears to the sounds around them through games, rhymes, and silly songs — the foundation of phonics.'
  }, {
    id: 'w2',
    title: 'Week 2 · First letter sounds',
    content: 'Meet s, a, t, p, i, n through play. Trace, find, and act out each sound with no pressure.'
  }, {
    id: 'w3',
    title: 'Week 3 · Blending sounds',
    content: 'Put sounds together to read first tiny words like “sat” and “pin”. Celebrate every win.'
  }, {
    id: 'w4',
    title: 'Week 4 · More letters & blends',
    content: 'Expand the toolkit and start spotting words in the wild — on signs, boxes, and books.'
  }, {
    id: 'w5',
    title: 'Week 5 · First sentences',
    content: 'Read short, joyful sentences together and build confidence with repetition and praise.'
  }, {
    id: 'w6',
    title: 'Week 6 · Reading for fun',
    content: 'Bring it all together with a simple decodable story and a keepsake reading certificate.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      maxWidth: 'var(--container-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, "The curriculum"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      marginBottom: 6
    }
  }, "Six gentle weeks to first words."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)',
      margin: 0
    }
  }, "Each week is five short activities \u2014 about ten minutes a day.")), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ['w1'],
    items: weeks
  })));
}
window.Curriculum = Curriculum;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course/Curriculum.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course/Enroll.jsx
try { (() => {
function Enroll() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const [plan, setPlan] = React.useState('full');
  const [step, setStep] = React.useState('form');
  const [data, setData] = React.useState({
    name: '',
    email: ''
  });
  const submit = e => {
    e.preventDefault();
    if (data.name.trim() && data.email.trim()) setStep('done');
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "enroll",
    style: {
      background: 'var(--ink-900)',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      maxWidth: 'var(--container-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 30,
      color: 'var(--clay-300)'
    }
  }, "let's begin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--ink-50)',
      margin: '2px 0 0'
    }
  }, "Enroll your little reader.")), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg",
    style: {
      maxWidth: 520,
      margin: '0 auto'
    }
  }, step === 'done' ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      color: 'var(--success)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "party-popper",
    style: {
      width: 32,
      height: 32
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px'
    }
  }, "You're enrolled, ", data.name.split(' ')[0], "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Week 1 is waiting in your inbox at ", data.email, ".")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 18
    }
  }, [['full', 'Full course', '$49 once'], ['monthly', 'Pay monthly', '3 × $19']].map(([id, t, p]) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: id,
    onClick: () => setPlan(id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (plan === id ? 'var(--accent)' : 'var(--border-default)'),
      background: plan === id ? 'var(--accent-soft)' : 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Priya Karthik",
    value: data.name,
    onChange: e => setData({
      ...data,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    value: data.email,
    onChange: e => setData({
      ...data,
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Enroll for ", plan === 'full' ? '$49' : '3 × $19'), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--text-subtle)',
      margin: 0
    }
  }, "30-day money-back guarantee \xB7 cancel anytime"))))));
}
window.Enroll = Enroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course/Enroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course/FAQ.jsx
try { (() => {
function FAQ() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const qs = [{
    id: 'q1',
    title: 'What ages is this course for?',
    content: 'It is designed for ages 4–6, but works beautifully for any child who is starting to show interest in letters and sounds.'
  }, {
    id: 'q2',
    title: 'How much time does it take?',
    content: 'About ten minutes a day, five days a week. The activities are short by design — little and often beats long and tiring.'
  }, {
    id: 'q3',
    title: 'Do I need to print anything?',
    content: 'No. Everything works on screen. The printable pack is an optional bonus if your child enjoys hands-on activities.'
  }, {
    id: 'q4',
    title: 'What if it is not right for us?',
    content: 'You have 30 days to try it. If it is not a fit for your family, email me and I will refund you in full — no hard feelings.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      maxWidth: 'var(--container-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      marginBottom: 0
    }
  }, "Good things to know.")), /*#__PURE__*/React.createElement(Accordion, {
    items: qs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-7)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      height: 40,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5
    }
  }, "\xA9 2026 Letter Land \xB7 Made with care for little readers"))));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course/Included.jsx
try { (() => {
function Included() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const feats = [['play', 'Bite-size daily activities', 'Five playful tasks a week, each about ten minutes.'], ['printer', 'Printable companion pack', 'Letter cards, trackers, and a reading certificate.'], ['smartphone', 'Works on any screen', 'No app to install — open it on phone, tablet, or laptop.'], ['heart', 'Parent pep-talks', 'Short notes that tell you exactly what to say and when.'], ['infinity', 'Lifetime access', 'Revisit any week, at any pace, for younger siblings too.'], ['shield-check', '30-day guarantee', "If it's not for your family, get a full refund."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '50ch',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "clay"
  }, "What's included"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      marginBottom: 0
    }
  }, "Everything you need, nothing you don't.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 18
    }
  }, feats.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '2px 0 4px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, body)))))));
}
window.Included = Included;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course/Included.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Approach.jsx
try { (() => {
function Approach() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const pillars = [['heart-handshake', 'Play first', 'Learning sticks when it feels like play — games, songs, and stories, never drills.'], ['sprout', 'One small step', 'Tiny daily wins build real momentum. Ten calm minutes beats an hour of pressure.'], ['book-open', 'Evidence-based', 'Every activity is grounded in phonics research and years of classroom practice.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    style: {
      background: 'var(--surface-card)',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "clay"
  }, "My approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Calm for parents, joyful for kids."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)',
      margin: 0
    }
  }, "A simple philosophy that fits into real family life \u2014 no flashcards-and-tears required.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: 20
    }
  }, pillars.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    variant: "outlined",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-on-soft)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, body))))));
}
window.Approach = Approach;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "lg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 40,
      alignItems: 'center'
    },
    className: "ll-cta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px'
    }
  }, "Get a free activity every week."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)',
      margin: 0,
      maxWidth: '40ch'
    }
  }, "One small, joyful reading idea in your inbox each Sunday. No spam, ever.")), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "You're in!"
  }, "Check your inbox to confirm your subscription.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@example.com",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail",
      style: {
        width: 18,
        height: 18
      }
    })
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      flex: 'none'
    }
  }, "Subscribe")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-6)',
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "Letter Land",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      color: 'var(--text-subtle)'
    }
  }, ['instagram', 'youtube', 'mail'].map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": i,
    style: {
      width: 20,
      height: 20
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "\xA9 2026 Letter Land \xB7 Made with care"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container ll-hero",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    dot: true
  }, "Early literacy educator"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
      margin: '18px 0 0',
      lineHeight: 1.05
    }
  }, "Helping little ones ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "fall in love"), " with letters."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      maxWidth: '46ch',
      marginTop: 18
    }
  }, "I'm Priya \u2014 I design playful, research-backed reading activities for ages 3\u20136, and help families build calm, joyful reading routines at home."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#resources"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Explore resources")), /*#__PURE__*/React.createElement("a", {
    href: "#approach"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "My approach"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 36
    }
  }, [['12k+', 'families helped'], ['8 yrs', 'in classrooms'], ['4.9★', 'parent rating']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustration-tiles.svg",
    alt: "Alphabet blocks",
    style: {
      width: '100%',
      maxWidth: 440
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
function Nav() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const links = ['Approach', 'Resources', 'About', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,246,241,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "Letter Land",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },
    className: "ll-desktop-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-body)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Work with me"))), /*#__PURE__*/React.createElement("button", {
    className: "ll-mobile-toggle",
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      display: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'x' : 'menu',
    style: {
      width: 26,
      height: 26
    }
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "ll-container",
    style: {
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onClick: () => setOpen(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-body)',
      padding: '10px 4px'
    }
  }, l))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Resources.jsx
try { (() => {
function Resources() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const [filter, setFilter] = React.useState('all');
  const items = [{
    tone: 'clay',
    cat: 'printable',
    age: 'Ages 3–4',
    icon: 'shapes',
    title: 'Alphabet adventure cards',
    desc: '26 playful letter cards with sounds, actions, and tracing.',
    tag: 'Free'
  }, {
    tone: 'sage',
    cat: 'course',
    age: 'Ages 4–6',
    icon: 'graduation-cap',
    title: 'Phonics, step by step',
    desc: 'A 6-week guided path from first sounds to first words.',
    tag: 'Course'
  }, {
    tone: 'clay',
    cat: 'printable',
    age: 'Ages 5–6',
    icon: 'pencil-ruler',
    title: 'Sight word workbook',
    desc: '40 pages of low-pressure practice for early readers.',
    tag: '$9'
  }, {
    tone: 'sage',
    cat: 'guide',
    age: 'All ages',
    icon: 'home',
    title: 'The 10-minute reading routine',
    desc: 'A parent guide to building a calm daily habit.',
    tag: 'Free'
  }];
  const filters = [['all', 'All'], ['course', 'Courses'], ['printable', 'Printables'], ['guide', 'Guides']];
  const shown = filter === 'all' ? items : items.filter(i => i.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "resources",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, "Resources"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      marginBottom: 6
    }
  }, "Tools you can use tonight."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)',
      margin: 0
    }
  }, "Printables, courses, and guides \u2014 made for busy families.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, filters.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setFilter(id),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13.5,
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (filter === id ? 'transparent' : 'var(--border-default)'),
      background: filter === id ? 'var(--accent)' : 'transparent',
      color: filter === id ? 'var(--text-on-accent)' : 'var(--text-muted)'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(248px, 1fr))',
      gap: 20
    }
  }, shown.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    variant: "elevated",
    interactive: true,
    padding: "none",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: it.tone === 'clay' ? 'var(--clay-100)' : 'var(--sage-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 44,
      height: 44,
      color: it.tone === 'clay' ? 'var(--clay-600)' : 'var(--sage-600)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: it.tag === 'Free' ? 'success' : it.tone
  }, it.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)',
      fontWeight: 600
    }
  }, it.age), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '4px 0 6px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      flex: 1
    }
  }, it.desc), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-link)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "View resource ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  }))))))));
}
window.Resources = Resources;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
function Testimonials() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const quotes = [{
    name: 'Anita R.',
    role: 'Parent of a 4-year-old',
    text: "My daughter asks for 'letter time' now. The activities are calm and actually fun — no more bedtime battles over reading."
  }, {
    name: 'Marcus T.',
    role: 'Dad of twins',
    text: "Finally something that fits our chaotic evenings. Ten minutes, real progress, zero printing stress."
  }, {
    name: 'Leena S.',
    role: 'Kindergarten teacher',
    text: "I recommend Letter Land to every family in my class. It's grounded in real phonics, not gimmicks."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--ink-900)',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ll-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '50ch',
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 30,
      color: 'var(--clay-300)'
    }
  }, "loved by families"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--ink-50)',
      marginTop: 4
    }
  }, "Kind words from real homes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 20
    }
  }, quotes.map(q => /*#__PURE__*/React.createElement("div", {
    key: q.name,
    style: {
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      marginBottom: 12,
      color: 'var(--clay-300)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 16,
      height: 16,
      fill: 'var(--clay-300)'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-100)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: '0 0 18px'
    }
  }, "\"", q.text, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: q.name,
    tone: "clay"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--ink-50)',
      fontSize: 14.5
    }
  }, q.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-300)'
    }
  }, q.role))))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
