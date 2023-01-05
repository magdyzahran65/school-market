<template>
    <footer class="login-footer">
        <div class="login-copyright">
            {{ copyright }}
        </div>
    </footer>
</template>
<script>
export default {
    name: "AppFooter",
    data() {
        return {
            copyright:
                "© All rights reserved to School's Market  System - 2022 | Designed and developed by Admins - Egypt for software",
        };
    },
};
</script>
