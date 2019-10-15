<template>
    <div class="select" :class="{active: active}" @click="toggleSelect">
        <span class="select__label">{{ label }}</span>
        <div class="select__value">
            <p class="select__value__value">{{ selectValue }}</p>
            <span class="select__value__arrow"></span>
        </div>
        <ul class="select__list">
            <li
              v-for="(item, index) in list"
              :key="index"
            >
              <a href="#0" 
                :class="[selectId == item.id ? 'active' : '']"
                @click.prevent="select(index)"
              >{{ item.value }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['list','default', 'label'],
  data() {
    return {
      active: false,
      selectValue: null,
      selectId: null
    };
  },
  created() {
    if (this.default) this.defaultSelect();
  },
  methods: {
    defaultSelect() {
      if (!this.default.value) return;

      this.selectValue = this.default.value;
      this.selectId = this.default.id;
    },

    select(index) {
        this.selectValue = this.list[index].value;
        this.selectId = index;

        this.$emit('emitselect', this.selectValue);
    },
    toggleSelect() {
        this.active = !this.active;
    },
  }
}
</script>

