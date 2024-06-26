import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    Datepicker
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '',
      description: '',
      dueDate: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onSave() {
      const newTask = {
        title: this.title.trim(),
        description: this.description
      }
      if (this.dueDate) {
        newTask.date = this.dueDate.toISOString().slice(0, 10)
      }
      this.$emit('taskSave', newTask)
    }
  },
  computed: {
    isTitleValid() {
      return !!this.title.trim()
    }
  }
}
