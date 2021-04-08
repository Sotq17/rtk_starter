

export const TableItem = ({ title, item, index }: any) => {
  return (
    <table key={index}>
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{item}</td>
        </tr>
      </tbody>
    </table>
  )
}
