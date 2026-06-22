import { createBDEApp, initScrollReveal } from './create-app.js';
import { members } from './data/members.js';

const { ref, computed, onMounted } = Vue;

createBDEApp({
    setup() {
        const basePath = ref('../');
        const membersList = ref(members);

        const getInitials = (first, last) => (first[0] + last[0]).toUpperCase();

        const groupBureau  = computed(() => membersList.value.filter(m => m.group === 'bureau'));
        const groupTreso   = computed(() => membersList.value.filter(m => m.group === 'treso'));
        const groupComm    = computed(() => membersList.value.filter(m => m.group === 'comm'));
        const groupEvents  = computed(() => membersList.value.filter(m => m.group === 'events'));
        const groupMembres = computed(() => membersList.value.filter(m => m.group === 'membres'));

        const countBureau = computed(() =>
            membersList.value.filter(m => m.isBureau || m.role.includes('Resp.')).length
        );
        const membersWithRole = computed(() =>
            membersList.value.filter(m => m.role !== 'Membre' && !m.isBureau)
        );
        const membersWithoutRole = computed(() =>
            membersList.value.filter(m => m.role === 'Membre')
        );

        onMounted(() => initScrollReveal());

        return {
            basePath, members: membersList, getInitials,
            groupBureau, groupTreso, groupComm, groupEvents, groupMembres,
            countBureau, membersWithRole, membersWithoutRole
        };
    }
}).mount('#app');
