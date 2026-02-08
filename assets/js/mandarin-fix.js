/* Global Mandarin text normalizer */
(function (global) {
    const hasHan = /[\u3400-\u9FFF]/;
    const likelyMojibake = /[\u00C0-\u00FF]/;

    function fixMandarinText(value) {
        if (typeof value !== 'string') return value;
        if (!likelyMojibake.test(value)) return value;
        if (hasHan.test(value)) return value;
        try {
            return decodeURIComponent(escape(value));
        } catch (err) {
            return value;
        }
    }

    function normalizeMandarinPayload(value) {
        if (typeof value === 'string') return fixMandarinText(value);
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                value[i] = normalizeMandarinPayload(value[i]);
            }
            return value;
        }
        if (value && typeof value === 'object') {
            Object.keys(value).forEach((key) => {
                value[key] = normalizeMandarinPayload(value[key]);
            });
        }
        return value;
    }

    global.fixMandarinText = fixMandarinText;
    global.normalizeMandarinPayload = normalizeMandarinPayload;
})(typeof window !== 'undefined' ? window : globalThis);
